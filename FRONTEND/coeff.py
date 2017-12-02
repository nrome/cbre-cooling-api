import datetime
import calendar
import numpy as np
from statsmodels.tsa.seasonal import seasonal_decompose

from dataframe_utilities import *

def create_datasets_from_dataframe(df, output_name):
    y_df = pd.DataFrame(index=df.index, columns=[output_name], data=df[output_name].values)
    X_df = drop_column_from_df(df, output_name)
    return X_df, y_df


def date_selection(X_df, y_df, date_selector):
    X = X_df.copy()
    X = X.ix[(X_df.index >= date_selector[0]) & (X.index <= date_selector[len(date_selector) - 1])]
    if isinstance(y_df, pd.DataFrame):
        y = y_df.copy()
        y = y.ix[(y.index >= date_selector[0]) & (y.index <= date_selector[len(date_selector)-1])]
    else:
        y = y_df
    return X, y


def deseasone_y(y_df):
    df = y_df.copy()
    df.index = df.index.to_datetime()
    res = seasonal_decompose(df, freq=12)
    seasonalities = res.seasonal
    df[df.columns[0]] = df[df.columns[0]] - seasonalities[seasonalities.columns[0]]
    return df, seasonalities


def add_months(source_date, months):
    month = source_date.month - 1 + months
    year = int(source_date.year + month / 12)
    month = month % 12 + 1
    day = min(source_date.day, calendar.monthrange(year, month)[1])
    return datetime.date(year, month, day)


def add_seasonality_to_predictions(y_pred, seasonality, start_date_str):
    if isinstance(y_pred, pd.DataFrame):
        res_index = y_pred.index
    else:
        predict_start_date = datetime.datetime.strptime(start_date_str, "%Y-%m-%d")
        predict_end_date = add_months(predict_start_date, len(y_pred))
        res_index = pd.date_range(predict_start_date, predict_end_date, freq='M')
        res_index = res_index[0:len(y_pred)]
        res_index = [datetime.datetime.strftime(index, '%Y-%m-%d')[0:7] + '-01' for index in res_index]

    res_index = pd.to_datetime(res_index)
    res = pd.DataFrame(y_pred, index=res_index)
    res["Month"] = res.index.month
    seasonality["Month"] = seasonality.index.month
    res["Predicted_w_seasonality"] = y_pred
    i = 0
    for month in res["Month"]:
        to_add = seasonality.ix[np.where(seasonality["Month"] == month)[0][0], 0]
        res.ix[i, "Predicted_w_seasonality"] = np.add(res.ix[i, "Predicted_w_seasonality"], to_add)
        i += 1
    return pd.DataFrame(res["Predicted_w_seasonality"], index=y_pred.index)


def manipulate_dataset(X, features, transformations, output_transformation=None, y=[], date_selector=[], seasonality=False):
    if len(date_selector) > 0:
        X_df, y_df = date_selection(X, y, date_selector)
    else:
        X_df = X.copy()
        y_df = y

    for index_feature, feature in enumerate(features):
        X_df[feature] = X_df[feature].apply(transformations[index_feature])

    if isinstance(y, pd.DataFrame):
        if output_transformation:
            y_df[y_df.columns[0]] = y_df[y_df.columns[0]].apply(output_transformation)
        if seasonality:
            y, seasonalities = deseasone_y(y_df)
            return X_df, y_df, y, seasonalities
        else:
            return X_df, y_df
    return X_df


def split_train_test_set(X, y, split_date):
    X_train = X[(X.index <= split_date)]
    y_train = y[(y.index <= split_date)]
    X_test = X[(X.index > split_date)]
    y_test = y[(y.index > split_date)]
    return X_train.astype(float), y_train.astype(float), X_test.astype(float), y_test.astype(float)


def manipulate_dataset_from_file(file_path, features, y_name, transformations=[], output_transformation=None, date_selector=[], seasonnality=False):
    df = load_data(file_path)
    X, y = create_datasets_from_dataframe(df, y_name)
    if len(transformations) == 0:
        transformations = [None] * len(features)

    manipulated_data = manipulate_dataset(X=X,
                                          features=features,
                                          transformations=transformations,
                                          output_transformation=output_transformation,
                                          y=y,
                                          date_selector=date_selector,
                                          seasonality=seasonnality)

    return X, y, manipulated_data



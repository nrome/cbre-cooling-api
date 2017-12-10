import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataVisualizationService {
  // cache url string for api calls
  BASE_URL = 'https://viz-engine.mybluemix.net';

  constructor (private http: Http) {}

  // Calling the data visualization API using GET method.
  getDataVisualization() {
    return this.http.get(this.BASE_URL + '/api/v1/run_model/')
      .map((response:Response) => response.json());
  }
}
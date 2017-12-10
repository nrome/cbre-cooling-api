// LIST DEPENDENCIES AND COMPONENT REGISTRATION

// core angular items/packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// custom components
// every component created must also be registered in the declarations array
import { AppComponent } from './app.component';
import { WebService } from './service/web.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/navigation-component/nav.component';

import { TemperatureComponent } from './dashboard/temperature-component/temperature.component';
import { NewTemperatureComponent } from './dashboard/temperature-component/new-temperature.component';

import { DataVisualizationService } from './service/visualization.service';
import { DataVisualizationComponent } from './dashboard/data-visualization-component/data-visualization.component';

import { RegisterComponent } from './dashboard/registration-component/register.component';

// set up navigation scheme with routes listing
// pass individual parameters with /:name on the path
const routes = [
  { path: '', component: DashboardComponent},
  { path: 'temperatures', component: TemperatureComponent},
  { path: 'temperatures/:name', component: TemperatureComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureComponent,
    NavComponent,
    NewTemperatureComponent,
    DataVisualizationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, DataVisualizationService],
  bootstrap: [AppComponent]
})

export class AppModule { }

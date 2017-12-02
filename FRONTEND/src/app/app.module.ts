// LIST DEPENDENCIES AND COMPONENT REGISTRATION

// node.js packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule  } from '@angular/material';

// core application utilites
import { AppComponent } from './app.component';
import { WebService } from './service/web.service';
import { HttpModule } from '@angular/http';

// custom components
// every component created must also be registered in the declarations array
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperatureComponent } from './dashboard/temperature-component/temperature.component';
import { NavComponent } from './dashboard/navigation-component/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule { }

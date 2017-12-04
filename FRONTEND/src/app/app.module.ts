// LIST DEPENDENCIES AND COMPONENT REGISTRATION

// core angular items/packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// custom components
// every component created must also be registered in the declarations array
import { AppComponent } from './app.component';
import { WebService } from './service/web.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperatureComponent } from './dashboard/temperature-component/temperature.component';
import { NavComponent } from './dashboard/navigation-component/nav.component';
import { NewTemperatureComponent } from './dashboard/temperature-component/new-temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureComponent,
    NavComponent,
    NewTemperatureComponent
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
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule { }

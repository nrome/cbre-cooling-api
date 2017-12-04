import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/navigation-component/nav.component';
import { NewTemperatureComponent } from './dashboard/temperature-component/new-temperature.component';

@Component({
  selector: 'app-root',
  // default placeholder from Angular CLI application template
  // templateUrl: './default.app.component.html',
  // a backtick permits multiple line templates
  template: `
              <nav></nav>
              <dashboard></dashboard> <!-- not being used -->
              <newtemperature (onPosted)="onPosted($event)"></newtemperature>
              <temperature></temperature>
            `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  onPosted(newtemp) {
    console.log(newtemp);
  }
}

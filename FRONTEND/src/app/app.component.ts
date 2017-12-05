import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/navigation-component/nav.component';
import { TemperatureComponent } from './dashboard/temperature-component/temperature.component';
import { NewTemperatureComponent } from './dashboard/temperature-component/new-temperature.component';

@Component({
  selector: 'app-root',
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

  // summon child component temperature.component
  @ViewChild(TemperatureComponent) temps : TemperatureComponent;

  onPosted(newtemp) {
    this.temps.temps.push(newtemp);
  }
}

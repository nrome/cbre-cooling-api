import { Component } from '@angular/core';
import { NavComponent } from './dashboard/navigation-component/nav.component';
import { TemperatureComponent } from './dashboard/temperature-component/temperature.component';
import { NewTemperatureComponent } from './dashboard/temperature-component/new-temperature.component';

@Component({
  selector: 'app-root',
  // a backtick permits multiple line templates
  template: `
              <nav></nav>
              <newtemperature></newtemperature>
              <temperature></temperature>
            `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {}

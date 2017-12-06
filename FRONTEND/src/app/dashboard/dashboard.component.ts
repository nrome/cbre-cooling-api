import { Component } from '@angular/core';
import { TemperatureComponent } from '../dashboard/temperature-component/temperature.component';
import { NewTemperatureComponent } from '../dashboard/temperature-component/new-temperature.component';
import { DataVisualizationComponent } from '../dashboard/data-visualization-component/data-visualization.component';

@Component({
  selector: 'dashboard',
  template: `
              <newtemperature></newtemperature>
              <temperature></temperature>
              <datavisualization></datavisualization>
            `,
})

export class DashboardComponent {}

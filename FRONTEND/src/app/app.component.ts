import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from  './dashboard/navigation-component/nav.component';

@Component({
  selector: 'app-root',
  // default placeholder from Angular CLI application template
  // templateUrl: './default.app.component.html',
  // a backtick permits multiple line templates
  template: `
              <nav></nav>
              <dashboard></dashboard><br>
              <temperature></temperature>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CBRE COOLING DASHBOARD';
}

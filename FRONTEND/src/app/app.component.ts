import { Component } from '@angular/core';
import { NavComponent } from './dashboard/navigation-component/nav.component';

@Component({
  selector: 'app-root',
  // a backtick permits multiple line templates
  template: `
              <nav></nav>
              <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {}

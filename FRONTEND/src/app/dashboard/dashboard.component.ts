import { Component } from '@angular/core'

@Component({
    /*
        we must add a selector for dashboard to be used
        as an element in the app.component.ts (i.e. <dashboard></dashboard>)
        this pattern will cascade for subdirectories or child components of the dashboard
    */
    selector: 'dashboard',
    template: ``
})

export class DashboardComponent {
    title = 'CBRE COOLING DASHBOARD';
}
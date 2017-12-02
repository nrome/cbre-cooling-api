import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
    selector: 'temperature',
    template: `
                <mat-card>
                    <mat-card-title>Number of active Units: {{ temps.length }}</mat-card-title>
                </mat-card>
                <div *ngFor="let temp of temps">
                    <mat-card>
                        <mat-card-content>
                            Name: {{temp.name}}
                            @ {{temp.actual}}&deg;F
                        </mat-card-content>
                    </mat-card>
                </div>
            `
})

export class TemperatureComponent {
    // create constructor for service
    constructor(private webService : WebService) {}

    /* local dummy data test
    temps = [
                {name: 'Unit A', actual: '79.7', min: '60', max: '90'},
                {name: 'Unit B', actual: '72.4', min: '60', max: '90'},
                {name: 'Unit C', actual: '77.8', min: '60', max: '90'}
            ];
    */

    temps = [];

    // get data
    async ngOnInit() {
        var response = await this.webService.getTemps();
        // console.log(response.json());
        // fill the empty array with loaded json object(s)
        this.temps = response.json();
    }
}
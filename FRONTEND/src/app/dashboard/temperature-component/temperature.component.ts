import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
    selector: 'temperature',
    template: `
                <mat-card>
                    <mat-card-title>Number of active Units: {{ webService.temps.length }} </mat-card-title>
                </mat-card>
                <div *ngFor="let temp of webService.temps">
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
}
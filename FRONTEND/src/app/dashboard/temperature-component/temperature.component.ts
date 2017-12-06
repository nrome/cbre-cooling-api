import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'temperature',
    template: `
                <div *ngFor="let temp of webService.temps | async">
                    <mat-card>
                        <mat-card-title [routerLink]="['/temperatures', temp.name]" style="cursor: pointer;"> 
                            {{temp.name}}
                        </mat-card-title>
                        <mat-card-content>@ {{temp.actual}}&deg;F</mat-card-content>
                    </mat-card>
                </div>
            `
})

export class TemperatureComponent {
    // declare service and activated route in our constructor
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        var unit = this.route.snapshot.params.name;
        this.webService.getTemps(unit);
    }
}
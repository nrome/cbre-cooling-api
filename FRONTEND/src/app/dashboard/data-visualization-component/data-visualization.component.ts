import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
    selector: 'datavisualization',
    template: `
                <mat-card>
                    <mat-card-title> Plot Data </mat-card-title>
                    <mat-card-content>
                        {{ webService.plotdata }}
                    </mat-card-content>
                </mat-card>
              `
})

export class DataVisualizationComponent {
    // create constructor for service
    constructor(private webService : WebService) {}

}
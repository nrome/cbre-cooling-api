import { Component, OnInit } from '@angular/core';
import { DataVisualizationService } from '../../service/visualization.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'datavisualization',
    template: `
                <mat-card>
                    <mat-card-title> Plot Data </mat-card-title>
                    <div *ngFor="let plots of plots">
                        <div *ngFor="let plot of plots" ng-bind-html="plot.plot">
                            <mat-card-content><h3>{{ plot.plot_name }}</h3>
                                <!--<div [innerHTML]="plot.plot"></div>-->
                                {{ plot.plot }}
                            </mat-card-content>
                        </div>
                    </div>
                </mat-card>
              `
})

export class DataVisualizationComponent {
    plots = [];

    // create constructor for service
    constructor(private dataVisualizationService: DataVisualizationService) {}

    ngOnInit() {
        // Object.values is a js object converter - remove if data source is redesigned
        // this is a cross-site scripting security vulnerability https://angular.io/guide/security#xss
        // best practice to have endpoint data structure redesined to output objects IN an array per Angular 2
        // step one: https://stackoverflow.com/questions/38216857/error-trying-to-diff-object-object
        // step two: https://stackoverflow.com/questions/20881213/converting-json-object-into-javascript-array
        this.dataVisualizationService.getDataVisualization()
            .subscribe(plotsResponse => this.plots = Object.values(plotsResponse));
    }

}
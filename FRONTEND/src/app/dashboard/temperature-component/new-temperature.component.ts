import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
    selector: 'newtemperature',
    template: `
                <mat-card class="card">
                    <mat-card-content>
                        
                            <mat-form-field>
                                <input [(ngModel)]="newtemp.name" matInput placeholder="New Temperature">
                            </mat-form-field>
                            <mat-form-field>
                                <textarea [(ngModel)]="newtemp.actual" matInput placeholder="Temperature"></textarea>
                            </mat-form-field>
                        
                        <mat-card-actions>
                            <button mat-button (click)="post()" color="Primary">POST</button>
                        </mat-card-actions>
                    </mat-card-content>
                </mat-card>
              `
})

export class NewTemperatureComponent {
    // create constructor for service
    constructor(private webService : WebService) {}

    newtemp = {
        name: '',
        actual: '',
        min: '60',
        max: '90'
    }

    // define post func for post behavior
    post() {
        this.webService.postTemps(this.newtemp);
    }

}
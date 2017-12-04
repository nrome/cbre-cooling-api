import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
    selector: 'newtemperature',
    template: `
                <mat-card class="card">
                    <mat-card-content>
                        <form>
                            <mat-form-field>
                                <input matInput placeholder="New Temperature" value="65&deg;F">
                            </mat-form-field>
                            <mat-form-field>
                                <textarea matInput placeholder="Temperature"></textarea>
                            </mat-form-field>
                        </form>
                        <mat-card-actions>
                            <button mat-button color="Primary">POST</button>
                        </mat-card-actions>
                    </mat-card-content>
                </mat-card>
              `
})

export class NewTemperatureComponent {
    // create constructor for service
    constructor(private webService : WebService) {}
}
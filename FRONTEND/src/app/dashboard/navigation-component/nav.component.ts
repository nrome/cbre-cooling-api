import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
                <mat-toolbar color="primary">
                    <button mat-button routerLink="/">Dashboard</button>
                    <button mat-button routerLink="/temperatures">Temperatures</button>
                </mat-toolbar>
              `
})

export class NavComponent {

    constructor() {}
}
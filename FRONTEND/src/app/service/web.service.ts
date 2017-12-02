import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    constructor(private http: Http) {}

    getTemps() {
        // direct observable
        // this.http.get('http://localhost:3000/temps');
        // all observables must be registered in the app.module.ts

        // observable with toPromise extension
        return this.http.get('http://localhost:3000/api/temps').toPromise();
    }
}
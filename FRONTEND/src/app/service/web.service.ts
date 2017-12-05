import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    // consolidate re-usable url string for api calls
    BASE_URL = 'http://localhost:3000/api';

    temps = [];

    constructor(private http: Http) {
        this.getTemps();
    }

    async getTemps() {
        // create observable with toPromise extension
        let response = await this.http.get(this.BASE_URL + '/temps').toPromise();
        this.temps = response.json();
    }

    async postTemp(newtemp) {
        // create observable with toPromise extension
        let response = await this.http.post(this.BASE_URL + '/temps', newtemp).toPromise();
        this.temps.push(response.json());
    }

}
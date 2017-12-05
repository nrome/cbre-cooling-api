import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';
//import { close } from 'fs';

@Injectable()
export class WebService {

    // cache url string for api calls
    BASE_URL = 'http://localhost:3000/api';

    temps = [];

    constructor(private http: Http, private sb : MatSnackBar) {
        this.getTemps();
    }

    async getTemps() {
        try {
            // create observable with toPromise extension
            let response = await this.http.get(this.BASE_URL + '/temps').toPromise();
            this.temps = response.json();
        } catch (error) {
            this.handleErrors("Unable to get temperatures");
        }
    }

    async postTemp(newtemp) {
        try {
            // create observable with toPromise extension
            let response = await this.http.post(this.BASE_URL + '/temps', newtemp).toPromise();
            this.temps.push(response.json());
        } catch (error) {
            this.handleErrors("Unable to post temperature");
        }
    }

    private handleErrors(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration:4000});
    }
}
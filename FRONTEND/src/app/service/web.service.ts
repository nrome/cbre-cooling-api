import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    // consolidate re-usable url string for api calls
    BASE_URL = 'http://localhost:3000/api';

    constructor(private http: Http) {}

    getTemps() {
        // create observable with toPromise extension
        return this.http.get(this.BASE_URL + '/temps').toPromise();
    }


    postTemps(newtemp) {
        // create observable with toPromise extension
        return this.http.post(this.BASE_URL + '/temps', newtemp).toPromise();
    }

}
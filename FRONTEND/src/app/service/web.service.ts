import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {

    // cache url string for api calls
    BASE_URL = 'http://localhost:3000/api';

    private tempsStore = [];
    private tempsSubject = new Subject();
    temps = this.tempsSubject.asObservable();

    constructor(private http: Http, private sb : MatSnackBar) {
        // expects arguement - error in console
        // this.getTemps();
    }

    getTemps(unit) {
        unit = (unit) ? '/' + unit : '';
        // subscribe to observable
        this.http.get(this.BASE_URL + '/temps' + unit).subscribe(response => {
            this.tempsStore = response.json();
            this.tempsSubject.next(this.tempsStore);
        }, error => {
            this.handleErrors('Unable to get temperatures');
        });

    }

    async postTemp(newtemp) {
        try {
            // create observable with toPromise extension (will replace with subscribe method)
            let response = await this.http.post(this.BASE_URL + '/temps', newtemp).toPromise();
            this.tempsStore.push(response.json());
            this.tempsSubject.next(this.tempsStore);
        } catch (error) {
            this.handleErrors('Unable to post temperature');
        }
    }

    private handleErrors(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration:4000});
    }
}
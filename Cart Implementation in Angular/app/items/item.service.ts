/**
 * Created by namita on 7/29/16.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Item} from './item';

@Injectable()
export class ItemService {
    constructor(private _http:Http) {
    }

    getData():Observable<Item[]> {
        return this._http.get('./app/items/items.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body.products || [];
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
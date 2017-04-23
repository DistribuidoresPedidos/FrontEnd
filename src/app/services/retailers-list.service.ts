import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RetailersListService{
    private retailerListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';

    constructor(private http: Http) { }

    getRetailers() {
        console.log("retailers service")
        return this.http.get(this.retailerListUrl ).map((response: Response) => response.json())
    }
}

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RetailersListService{
    private retailerListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';
    private retailerDetailUrl='';
    constructor(private http: Http) { }

    getRetailers() {
        return this.http.get(this.retailerListUrl ).map((response: Response) => response.json())
    }
    getRetailerById(id: number) {
        this.retailerDetailUrl = `${this.retailerListUrl}/${id}`;
        return this.http.get(this.retailerDetailUrl).map((response: Response) => response.json());

    }
}

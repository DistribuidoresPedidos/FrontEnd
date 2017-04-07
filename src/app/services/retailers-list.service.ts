import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RetailersListService{
    private retailerListUrl = 'http://localhost:3000/api/v1/retailers';

    constructor(private http: Http){
        console.log("productListService");
        //this.http.request('http://localhost:3000/products').subscribe((response: Response ) => {
            //console.log(response.json());
        //})
    }


    getProducts(){
return this.http.get(this.retailerListUrl ).map((response: Response) => response.json())
  // return  this.http.request('http://localhost:3000/products').subscribe((response: Response ) => {})

    }
}
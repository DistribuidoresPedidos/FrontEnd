import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../product-list/product';

@Injectable()
export class ProductListService{
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private productListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';

    constructor(private http: Http){
        //console.log("productListService");
        //this.http.request('http://localhost:3000/products').subscribe((response: Response ) => {
            //console.log(response.json());
        //})
    }

    getProducts(){  
        return this.http.get(this.productListUrl).map((response: Response) => response.json());
    }

    getProductById(id: number): Observable<Product> {
        const url = `${this.productListUrl}/${id}`;
        let a = this.http.get(url, { headers: this.headers })
          .map(this.extractData)
          .catch(this.handleError);
          return a;
    }

    getProductById111(id: number){  
        var url1 = `${this.productListUrl}/${id}`;
        return this.http.get(url1).map((response: Response) => response.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
        return Observable.throw(errMsg);
    }

}

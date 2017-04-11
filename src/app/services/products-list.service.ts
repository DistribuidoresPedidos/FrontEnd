import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../classes/product';

@Injectable()
export class ProductListService {
    private productListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get(this.productListUrl).map((response: Response) => response.json());
    }

    getProductById(id: number): Observable<Product> {
        const url = `${this.productListUrl}/${id}`;
        return this.http.get(url).map(this.extractData).catch(this.handleError);
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

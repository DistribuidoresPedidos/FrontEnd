import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Angular2TokenService } from 'angular2-token';
import { Product } from '../classes/product';

@Injectable()
export class ProductListService {
    private productListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';


    constructor(private http: Http, private _tokenService: Angular2TokenService) { }

    getProducts() {
       // console.log(this.http.get(this.productListUrl));
        const url = `${this.productListUrl}`;
        return this.http.get(this.productListUrl).map((response: Response) => response.json());
    }


    getProductById(id) {
        const url = `${this.productListUrl}/${id}`;
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }

    getProductByNearRetailer(id){
      console.log(this._tokenService.currentUserType);


    }


}

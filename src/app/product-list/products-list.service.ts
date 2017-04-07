import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Product} from './product';

@Injectable()
export class ProductListService{
    private productListUrl = 'http://localhost:3000/products';

    constructor(private http: Http){
        console.log("productListService");
        //this.http.request('http://localhost:3000/products').subscribe((response: Response ) => {
            //console.log(response.json());
        //})
    }


    getProducts(){
return this.http.get(this.productListUrl).map((response: Response) => response.json())
  // return  this.http.request('http://localhost:3000/products').subscribe((response: Response ) => {})

    }
}
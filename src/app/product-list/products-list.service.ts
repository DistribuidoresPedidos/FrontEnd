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
    }

    getProducts():Observable<Product[]>{
        return this.http.get(this.productListUrl).map((response: Response) => <Product[]>response.json())
    }
}
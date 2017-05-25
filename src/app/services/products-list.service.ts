import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Angular2TokenService } from 'angular2-token';
import { Product } from '../classes/product';

@Injectable()
export class ProductListService {
    private offeredProductListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';
    private distributorsUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/distributors'
    private offeredProductUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';
    private productUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/products';
    private categoriesUrl= 'http://infinite-river-92156.herokuapp.com/api/v1/products/categories'
    constructor(private http: Http) {
    }
    getCategories(){
      const url = this.categoriesUrl;
      console.log(url);
      return this.http.get(url).map((response: Response)=> response.json());

    }
    getDistributorProducts(distributorId: number) {
      const url = this.distributorsUrl + `/${distributorId}/offered_products`;
      return this.http.get(url).map((response => response.json()));
    }

    getProducts(retailer_id: number, q: string) {
        const url = this.offeredProductListUrl + `/${retailer_id}/offered_products_by_param_retailer_match?q=${q}`;
        return this.http.get(url).map((response: Response) => response.json());
    }
    getProductById(id) {
        const url = `${this.offeredProductUrl}/${id}`;
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategories( categories: string[] ){
         var url = `${this.productUrl}/products_by_categories/?`;
         for(var category of categories)
            url += 'categories[]=' + category + "&";
        url = url.slice(0, -1);
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategory( category: string ){
        var url = `${this.productUrl}/products_by_categories/?`;
        url += 'categories[]=' + category;
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }
    getProductCoordinates() {
      //TODO
        return this.http.get(this.distributorsUrl).map((response: Response) => response.json());
    }

    getMostBuyedProducts(id: number): Observable<any> {
      let url = `http://infinite-river-92156.herokuapp.com/api/v1/retailers/${id}/most_buyed`;
      return this.http.get(url).map((response: Response) => response.json());
    }

    getMostSelledProducts(id: number): Observable<any> {
      let url = `http://infinite-river-92156.herokuapp.com/api/v1/distributors/${id}/most_selled`;
      return this.http.get(url).map((response: Response) => response.json());
    }

    createProduct( dataform : Object):Observable<any>{
      let head = new Headers({});
      let options = new RequestOptions({ headers : head });
      let url= this.productUrl;
      return this.http.post(url, dataform, options).map((response: Response) => response.json());
    }

      private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
}

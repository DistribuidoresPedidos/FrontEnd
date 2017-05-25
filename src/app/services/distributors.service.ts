import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Distributor } from '../classes/distributor';
import { Comment } from '../classes/comment';
import {OrderProduct} from '../classes/orderProduct';
@Injectable()
export class DistributorsService {
  private distributorsUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/distributors';
  private distributorsByRetailer = 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';
  private distributorProductDetails = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';
  constructor(private http: Http) { }


  getDistributors() {
    const url = `${this.distributorsByRetailer}/${localStorage['userId']}/distributors`;
    console.log(url);
    return this.http.get(url).map((response: Response) => response.json());
  }

  getDistributorById(id: number) {
    const url = `${this.distributorsUrl}/${id}`;
    return this.http.get(url).map((response: Response) => response.json());
  }

  getComments(id: number): Observable<Comment[]> {
      const url = `${this.distributorsUrl}/${id}/comments`;
      return this.http.get(url).map((response: Response) => response.json());
  }

  isFavorite(distributorId:number){
    const id = localStorage['userId'];
    const url = `${this.distributorsByRetailer}/${id}/is_favorite?distributor_id=${distributorId}`;
    return this.http.get(url).map((response: Response) => response.json());
  }

  addFavorite(distributorId:number){
    const id = localStorage['userId'];
    const url = `${this.distributorsByRetailer}/${id}/favorites`;
    var body = {};
    body['distributor_id'] = distributorId;
    
    let headers = new Headers(
      { 
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });
    
    return this.http.post(url,body,options)
    .map((response : Response)=>response.json())
    .catch(this.handleError);  
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
  getProductDelivered(id: number): Observable<OrderProduct[]> {
      const param= 'delivered'
      const url = `${this.distributorProductDetails}/${id}/how_many_by_param?param=${param};`;
      return this.http.get(url).map((response: Response) => response.json());
  }
  getProductProcessing(id: number): Observable<OrderProduct[]> {
      const param= 'processing'
      const url = `${this.distributorProductDetails}/${id}/how_many_by_param?param=${param};`;
      return this.http.get(url).map((response: Response) => response.json());
  }
  getProductDeparted(id: number): Observable<OrderProduct[]> {
      const param= 'departed'
      const url = `${this.distributorProductDetails}/${id}/how_many_by_param?param=${param};`;
      return this.http.get(url).map((response: Response) => response.json());
  }

}

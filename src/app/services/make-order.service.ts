import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Order} from '../classes/order';
@Injectable()
export class MakeOrderService extends BaseRequestOptions {
  private makeOrderUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/orders/make_order';

  constructor(private http: Http) { super(); }


  createOrder( body : Object):Observable<any>{
    let bodyString = JSON.stringify(body);
    
    let headers = new Headers(
      { 
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });
    
    return this.http.post(this.makeOrderUrl,bodyString,options)
    .map((response : Response)=>console.log(response.json()))
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


}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';

import {Order} from '../classes/order';
@Injectable()
export class OrdersService {
  private ordersURL='http://infinite-river-92156.herokuapp.com/api/v1/retailers';
  private makeOrderUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/orders/make_order';

  constructor(private http:Http , private authToken: Angular2TokenService){}

 getOrders(){
  const id  = this.authToken.currentUserData.id;
  console.log ("service ");
  console.log (this.authToken.currentUserData);
  
  const OrdersURL_ID = `${this.ordersURL}/${id}/orders`;
  return this.http.get(OrdersURL_ID).map((response: Response) => response.json());
 }

  getOrdersById( id : number ){
    const OrdersURL_ID = `${this.ordersURL}/${id}/orders`;
    return this.http.get(OrdersURL_ID).map((response: Response) => response.json());
  }

 

  


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

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';

import {Order} from '../classes/order';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class OrdersService {
  private ordersURL= 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';
  private makeOrderUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/orders/make_order';
  private offeredProductsURL = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';
  private makeCommentUrl= 'http://infinite-river-92156.herokuapp.com/api/v1/orders';

  //shared variable between orderList and makeCOment
  private orderSubject = new BehaviorSubject <any>(0);

  constructor(private http: Http , private authToken: Angular2TokenService){}

  sendOrderSubject(data) {
   // console.log("service",{data});
    this.orderSubject.next({data});
  }
  getOrderSubject(): Observable<any> {
    return this.orderSubject.getValue();
  }

 getOrders() {
  //const id  = this.authToken.currentUserData.id;
  //console.log ("service ");
  //console.log (this.authToken.currentUserData);
  const id = localStorage['userId'];
  const OrdersURL_ID = `${this.ordersURL}/${id}/orders`;
  return this.http.get(OrdersURL_ID).map((response: Response) => response.json());
 }

  getOrdersById( id: number ) {
    const OrdersURL_ID = `${this.ordersURL}/${id}/orders`;
    return this.http.get(OrdersURL_ID).map((response: Response) => response.json());
  }


  getOfferedProduct() {
    return this.http.get(this.offeredProductsURL).map((response: Response) => response.json());
  }

  createOrder(body: Object): Observable<any> {
    let bodyString = JSON.stringify(body);

    let headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });

    return this.http.post(this.makeOrderUrl, bodyString, options);
  }

  createComment(body: Object , id: number ): Observable<any> {
    const createCommentURL_ID = `${this.makeCommentUrl}/${id}/comments`;
    let bodyString = JSON.stringify(body);
    console.log('post', bodyString);
    //console.log("url",createCommentURL_ID);
    let headers = new Headers({
        'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers : headers });
    return this.http.post(createCommentURL_ID, body, options) .map((response: Response) => console.log(response.json()))
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

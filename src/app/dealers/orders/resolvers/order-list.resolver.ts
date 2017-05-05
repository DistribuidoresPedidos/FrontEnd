import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OrdersService } from '../../../services/orders.service';

@Injectable()
export class OrderListResolver implements Resolve<any> {
  constructor(
    private ordersService: OrdersService,
   
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log("resolver" + this.authToken.currentUserData.id);

    //return this.ordersService.getOrdersById(this.authToken.currentUserData.id);
    return this.ordersService.getOrders();
}
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OrdersService } from '../../../services/orders.service';

@Injectable()
export class OrderListResolver implements Resolve<any> {
  constructor(
    private ordersService: OrdersService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.ordersService.getOrdersById(route.params.id);
  }
}

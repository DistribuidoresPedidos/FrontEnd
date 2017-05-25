import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OrdersService } from '../../../services/orders.service';

@Injectable()
export class OfferedProductResolver implements Resolve<any> {
  constructor(
    private ordersService: OrdersService,
   
  ) { }


  resolve(route: ActivatedRouteSnapshot): Observable<any>{
    return this.ordersService.getOfferedProduct();
  }
}
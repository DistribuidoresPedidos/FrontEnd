import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { RetailersListService } from '../../../services/retailers-list.service';


@Injectable()
export class RetailerCoordinateResolver implements Resolve<any> {
  constructor(
    private retailerService: RetailersListService,

  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.retailerService.getRetailerById(localStorage['userId']);
  }
}

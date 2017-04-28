import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { RetailersListService } from '../services/retailers-list.service';

@Injectable()
export class RetailerDetailResolver implements Resolve<any> {
  constructor(
    private retailersListService: RetailersListService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.retailersListService.getRetailerById(route.params.id);
  }
}
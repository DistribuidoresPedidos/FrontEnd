import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';
import { DistributorsService } from '../../../services/distributors.service';
import { RetailersListService } from '../../../services/retailers-list.service';


@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(
    private distributorService: DistributorsService,
    private retailertService: RetailersListService,
    private authToken: Angular2TokenService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if(this.authToken.currentUserType === 'RETAILER'){
      return this.retailertService.getRetailerCoordinates(localStorage['userId']);
    }
    else{
      return this.distributorService.getProductDelivered(localStorage['userId']);
    }
  }
}

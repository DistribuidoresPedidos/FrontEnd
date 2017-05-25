import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';
import { DistributorsService } from '../../../services/distributors.service';



@Injectable()
export class ProductProcessingResolver implements Resolve<any> {
  constructor(
    private distributorService: DistributorsService,
    private authToken: Angular2TokenService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if(this.authToken.currentUserType === 'DISTRIBUTOR'){
      return this.distributorService.getProductProcessing(localStorage['userId']);
    }
  }
}

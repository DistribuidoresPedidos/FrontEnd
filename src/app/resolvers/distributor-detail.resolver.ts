import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DistributorService } from '../services/distributor.service';

@Injectable()
export class DistributorDetailResolver implements Resolve<any> {
  constructor(
    private distributorService: DistributorService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.distributorService.getDistributorById(route.params.id);
  }
}

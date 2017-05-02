import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DistributorsService } from '../../../services/distributors.service';

@Injectable()
export class DistributorCommentsResolver implements Resolve<any> {
  constructor(
    private distributorsService: DistributorsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.distributorsService.getComments(route.params.id);
  }
}

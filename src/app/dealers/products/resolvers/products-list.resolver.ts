import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService } from 'angular2-token';
import { ProductListService } from '../../../services/products-list.service';



@Injectable()
export class ProductListResolver implements Resolve<any> {
  constructor(
    private productService: ProductListService,
    private authToken: Angular2TokenService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if(this.authToken.currentUserType === 'RETAILER'){
      return this.productService.getProducts(localStorage['userId'], '*');
    }
    else{
      return this.productService.getDistributorProducts(localStorage['userId']);
    }
  }
}

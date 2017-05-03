import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProductListService } from '../../../services/products-list.service';


@Injectable()
export class ProductDetailResolver implements Resolve<any> {
  constructor(
    private productService: ProductListService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.productService.getProductById(route.params.id);
  }
}

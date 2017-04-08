import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from "../services/products-list.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products1: Product[] = [];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService :ProductListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.getProductsById(this.id);
  }

  getProductsById( id: number ){
    let product: Product[] = []; 
    this.productListService.getProductById(id).subscribe(data => product.push(data));
    this.products1 = product;
  }

}

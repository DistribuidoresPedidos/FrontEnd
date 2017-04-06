import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Product} from './product';
import {ProductListService} from'./products-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  constructor(private productListService :ProductListService) { }

  ngOnInit() {
    console.log("productListComponent");
      this.getProducts();

  }
  getProducts(){

    this.productListService.getProducts().subscribe(data => console.log(data));
  }
}

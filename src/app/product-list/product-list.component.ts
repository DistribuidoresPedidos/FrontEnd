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
    for(let i in this.products){
      console.log("here");
      console.log(i);
    }
  }
  getProducts(){
    this.productListService.getProducts().subscribe(products => this.products = products);
  }
}

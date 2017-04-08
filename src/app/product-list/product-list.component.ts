import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from './product';
import { ProductListService } from "../services/products-list.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products: Product[] =[];
  constructor(private productListService :ProductListService) { }

  ngOnInit() {
      this.getProducts();
  }
  getProducts(){

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
       // console.log(element.product);
        this.products.push(element.product);
      });
    });

  }
}

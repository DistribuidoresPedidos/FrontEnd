import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from './product';
import { ProductListService } from "../services/products-list.service";
import {FilterOfferedProductsNamePipe} from '../filter-offered-products-name.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
 // pipes: [FilterOfferedProductsNamePipe]
 

})
export class ProductListComponent implements OnInit {
   //products: Product[] =[];
   //distributors =[];
   dataItems=[];
  constructor(private productListService :ProductListService) { }

  ngOnInit() {
      this.getProducts();
  }
  getProducts(){

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
       // console.log(element.product);
        //this.products.push(element.product);
        //this.distributors.push(element.distributor);
        console.log(element.distributor);
        this.dataItems.push(element)
      });
    });

  }
}

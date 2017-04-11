import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from '../classes/product';
import { ProductListService } from '../services/products-list.service';
import { FilterOfferedProductsNamePipe } from '../pipes/filter-offered-products-name.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent implements OnInit {
   dataItems= [];
  constructor(private productListService: ProductListService) { }

  ngOnInit() {
      this.getProducts();
  }
  getProducts() {

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
        this.dataItems.push(element);
      });
    });

  }
}

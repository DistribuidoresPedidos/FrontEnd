import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { ProductListService } from '../../../services/products-list.service';
import { FilterOfferedProductsNamePipe } from '../../../pipes/filter-offered-products-name.pipe';
import { ActivatedRoute , Router } from "@angular/router";
import { MakeOrderService} from '../../../services/make-order.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent implements OnInit {
   dataItems = [];
   filtername = "";
   filtercategory = [];
   filterprice = [0,50];
   categoryList = ["cat7","cat9","cat10"];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService,
    private makeOrderService : MakeOrderService) { }

  ngOnInit() {
    this.dataItems = this.route.snapshot.data.dataItems.data;
    console.log(this.dataItems);

  }
  getProducts() {

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
        this.dataItems.push(element);
      });
    });

  }


  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }


}

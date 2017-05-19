import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from '../../../classes/product';
import { Coordinate } from "../../../classes/Coordinate";
import { OrderProduct } from "../../../classes/orderProduct"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../../../services/products-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   product: Product;
   coordinate;
   dataUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService :ProductListService
  ) { }

  ngOnInit() {
   console.log(this.route.snapshot.data.product.data);
   this.product = this.route.snapshot.data.product.data;
   this.coordinate = this.route.snapshot.data.productCoordinate.data;

   this.dataUser = this.route.snapshot.data.user.data;
   console.log(this.dataUser);
  }


  getProductById(id){

      this.productListService.getProductById(id).subscribe(response =>{
        console.log(response);
      });
  }





}

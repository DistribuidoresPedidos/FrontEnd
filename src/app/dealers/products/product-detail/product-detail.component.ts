import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
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
    userFlag: boolean= false;
    detailsUser: boolean= false; 
  constructor(
    private authToken: Angular2TokenService,
    private route: ActivatedRoute,
    private router: Router,
    private productListService :ProductListService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.data.product.data);
    this.product = this.route.snapshot.data.product.data;
    if(this.authToken.currentUserType === 'RETAILER'){
        this.userFlag= true;
    }
  }


  getProductById(id){
    this.productListService.getProductById(id).subscribe(response =>{
        console.log(response);
    });
  }





}

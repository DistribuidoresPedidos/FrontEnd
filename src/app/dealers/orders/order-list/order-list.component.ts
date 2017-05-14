import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Order} from '../../../classes/order';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
    //orders : Order[]=[]
    orders=[]
    offeredProducts=[]
    ofpbpi={};
   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authToken: Angular2TokenService
  
  ) { }
 
 solveOfferedProductsByProductId(){

   for(let i = 0 ; i<this.offeredProducts.length;i++){
      this.ofpbpi[this.offeredProducts[i].product.id]=this.offeredProducts[i].product.name;
   }
   console.log(this.ofpbpi);
 }
  ngOnInit() {
    this.orders = this.route.snapshot.data.order.data;
    //console.log(this.orders);
    this.offeredProducts=this.route.snapshot.data.offeredProduct.data;
    this.solveOfferedProductsByProductId();
    //console.log(this.offeredProducts)
    //console.log(this.route.snapshot.data);
   //console.log("current user ");
   //console.log(this.authToken.currentUserData);
  }

}

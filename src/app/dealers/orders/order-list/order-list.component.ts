import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Order} from '../../../classes/order';
import { Angular2TokenService } from 'angular2-token';
import { OrdersService } from '../../../services/orders.service';

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
    data={};
    private selectedOrder={};

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authToken: Angular2TokenService,
    private ordersSevice : OrdersService
  
  ) { }
 


 solveOfferedProductsByProductId(){
   for(let i = 0 ; i<this.offeredProducts.length;i++){
      this.ofpbpi[this.offeredProducts[i].product.id]=this.offeredProducts[i].product.name;
   }
   //console.log(this.ofpbpi);
 }
  ngOnInit() {
    
    //this.data=this.route.snapshot.data;
    this.orders = this.route.snapshot.data.order.data;
    //console.log(this.route.snapshot.data);
    this.offeredProducts=this.route.snapshot.data.offeredProduct.data;
    this.solveOfferedProductsByProductId();
  }
  send(obj){
    this.ordersSevice.sendOrderSubject(obj);
    console.log("sending",obj);
  }


}

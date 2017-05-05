import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Order} from '../../../classes/order';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
    orders : Order[]=[]
   constructor(
    private router: Router,
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit() {
    this.orders = this.route.snapshot.data.order.data;
   // console.log(this.route.snapshot.data.order.data);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//routing
import {OrdersRoutingModule} from './orders-routing.module';

//components
import {OrdersComponent} from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';


// resolver

import { OrderListResolver } from './resolvers/order-list.resolver';
import { MakeOrderComponent } from './make-order/make-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    OrderListComponent,
    MakeOrderComponent
  ],
  providers:[
    OrderListResolver
  ]
})
export class OrdersModule { }

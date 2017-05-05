import { NgModule } from '@angular/core';


//routing
import {OrdersRoutingModule} from './orders-routing.module';

//components
import {OrdersComponent} from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';


// resolver

import {OrderListResolver} from './resolvers/order-list.resolver';
@NgModule({
  imports: [
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    OrderListComponent
  ],
  providers:[
    OrderListResolver
  ]
})
export class OrdersModule { }

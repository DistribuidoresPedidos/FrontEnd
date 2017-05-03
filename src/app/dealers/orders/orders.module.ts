import { NgModule } from '@angular/core';


//routing
import {OrdersRoutingModule} from './orders-routing.module';

//components
import {OrdersComponent} from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    OrderListComponent
  ]
})
export class OrdersModule { }

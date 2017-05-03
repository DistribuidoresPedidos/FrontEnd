import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { OrdersComponent} from './orders.component';
import { OrderListComponent} from './order-list/order-list.component';
const ordersRoutes = [
    {
        path: '',
        component: OrdersComponent,
       children :[
          {
            path : '',
            component : OrderListComponent
          }
        ]

    }
]



@NgModule({
  imports: [

    RouterModule.forChild(ordersRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [],
  providers:[]
})
export class OrdersRoutingModule { }

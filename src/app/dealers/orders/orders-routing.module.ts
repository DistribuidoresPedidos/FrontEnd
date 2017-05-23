import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { OrdersComponent} from './orders.component';
import { OrderListComponent} from './order-list/order-list.component';
import {MakeOrderComponent} from './make-order/make-order.component';
import {MakeCommentComponent} from './make-comment/make-comment.component';
//resolver
import {OrderListResolver} from './resolvers/order-list.resolver';
import {OfferedProductResolver} from './resolvers/offeredProduct.resolver';
const ordersRoutes = [
    {
        path: '',
        component: OrdersComponent,
       children :[
          {
            path : '',
            component : OrderListComponent,
            resolve :{
              order : OrderListResolver,
              offeredProduct : OfferedProductResolver
            }

          },
          {
            path :'makeOrder',
            component :MakeOrderComponent,
            
          },
          {
            path : 'makeComment',
            component : MakeCommentComponent,
            
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

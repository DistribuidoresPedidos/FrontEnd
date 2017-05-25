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
import {OfferedProductResolver} from './resolvers/offeredProduct.resolver';
import { MakeOrderComponent } from './make-order/make-order.component';


//table 
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MakeCommentComponent } from './make-comment/make-comment.component';

import { RatingModule } from "ngx-rating";
import { SharedModule } from "../../shared/shared.module";
import { OrdersService } from "../../services/orders.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    RatingModule,
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    OrderListComponent,
    MakeOrderComponent,
    MakeCommentComponent
  ],
  providers:[
    OrderListResolver,
    OfferedProductResolver,

  ]
})
export class OrdersModule { }

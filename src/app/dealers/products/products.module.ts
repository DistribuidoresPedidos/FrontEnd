// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { ProductsRoutingModule } from './products-routing.module';

//Components
import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

//resolvers

import {ProductListResolver} from './resolvers/products-list.resolver';
import {ProductDetailResolver} from './resolvers/product-detail.resolver';


@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductListResolver,
    ProductDetailResolver
  ]
})
export class ProductsModule { }

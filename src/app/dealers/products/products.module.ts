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
import { FilterOfferedProductsNamePipe } from './pipes/filter-offered-products-name.pipe';
import { FilteredOfferedProductsCategoryPipe } from './pipes/filtered-offered-products-category.pipe';
import { FilterOfferedProductsPricePipe } from './pipes/filter-offered-products-price.pipe';

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
    ProductDetailComponent,
    FilterOfferedProductsPricePipe,
    FilteredOfferedProductsCategoryPipe,
    FilterOfferedProductsNamePipe
  ],
  providers: [
    ProductListResolver,
    ProductDetailResolver
  ]
})
export class ProductsModule { }

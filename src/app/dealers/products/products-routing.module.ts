// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {ProductsComponent } from './products.component';
import {ProductListComponent } from './product-list/product-list.component';
import {ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductCreateComponent} from './product-create/product-create.component'
//import {ProductPostResolver}

//Resolvers
import {ProductDetailResolver} from './resolvers/product-detail.resolver'
import {ProductListResolver} from './resolvers/products-list.resolver'
import {ProductCreateResolver} from './resolvers/products-create.resolver'
import {ProductCoordinateResolver} from './resolvers/product-coordinates.resolver'
import {UserResolver} from './resolvers/user.resolver'
import {RetailerCoordinateResolver} from './resolvers/retailer-coordinate.resolver'

//import {ProductPostResolver}
//externos


const productsRoutes = [
  {
    path: '',
    component: ProductsComponent,
    children:[

      {
        path: 'create',
        component: ProductCreateComponent,
        resolve:{
          categories: ProductCreateResolver
        }
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductDetailResolver,
          productCoordinate: ProductCoordinateResolver,
          user: UserResolver,
          retailerCoordinate: RetailerCoordinateResolver

        }
      },
      {
        path: ':category',
        component: ProductListComponent,
        resolve: {
          products: ProductListResolver
        }
      },
      {
        path: '',
        component: ProductListComponent,
        resolve: {
          dataItems: ProductListResolver
        }
      },

    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class ProductsRoutingModule { }

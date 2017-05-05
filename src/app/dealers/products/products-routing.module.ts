// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {ProductsComponent } from './products.component';
import {ProductListComponent } from './product-list/product-list.component';
import {ProductDetailComponent } from './product-detail/product-detail.component';
//import {ProductPostResolver}

//Resolvers
import {ProductDetailResolver} from './resolvers/product-detail.resolver'
import {ProductListResolver} from './resolvers/products-list.resolver'
//import {ProductPostResolver}

const productsRoutes=[
  {
    path: '',
    component: ProductsComponent,
    children:[
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve:{
          product: ProductDetailResolver
        }
      },
      {
        path: '',
        component: ProductListComponent,
        resolve:{
          dataItems: ProductListResolver
        }
      },
      {
        path: ':category',
        component: ProductListComponent,
        resolve:{
          products: ProductListResolver
        }
      }

    ]
  }
]


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

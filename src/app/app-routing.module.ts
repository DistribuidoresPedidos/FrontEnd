import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RetailersComponent } from './retailers/retailers.component';
import {MakeOrderComponent}   from './make-order/make-order.component';              

import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { DistributorAddressResolver } from './resolvers/distributor-address.resolver';
import { ProductListResolver} from './resolvers/products-list.resolver';
import { ProductDetailResolver} from'./resolvers/product-detail.resolver';
import {} from '';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    {
        path: 'distributors',
        component: DistributorsComponent,
        resolve: {
            distributors: DistributorListResolver
        }
    },
    {
        path: 'distributors/:id',
        component: DistributorDetailComponent,
        resolve: {
            distributor: DistributorDetailResolver,
            distributorAddress: DistributorAddressResolver
        }
    },
    {
        path:'products',
        component : ProductListComponent,
        resolve:{
            dataItems: ProductListResolver
        }
    },
    {
        path:'products/:id' ,
        component : ProductDetailComponent,
        resolve :{
            product : ProductDetailResolver

    }
    },
    {
        path : 'make_order',
        component:  MakeOrderComponent
        
    },
    {path:  'retailers', component: RetailersComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RetailersComponent } from './retailers/retailers.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RegisterComponent } from './register/register.component';
import {CommentsComponent} from './comments/comments.component';
import {MakeOrderComponent}   from './make-order/make-order.component';  

import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { ProductListResolver } from './resolvers/products-list.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { RetailersListResolver } from './resolvers/retailers-list.resolver';
import { RetailerDetailResolver } from './resolvers/retailer-detail.resolver';
import { AppComponent } from './app.component';
import { DistributorCommentsResolver } from './resolvers/distributor-comments.resolver';


const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'register', component: RegisterComponent},
    {
        path: 'distributors',
        component: DistributorsComponent,
        resolve: {
            distributors: DistributorListResolver
        },
    },
    {
        path: 'distributors/:id',
        component: DistributorDetailComponent,
        resolve: {
            distributor: DistributorDetailResolver,
            distributorComments: DistributorCommentsResolver
        },
    },
    {
        path: 'products',
        component : ProductListComponent,
        resolve: {
            dataItems: ProductListResolver
        },
    },
    {
        path:'products/:id' ,
        component : ProductDetailComponent,
        resolve :{
            product : ProductDetailResolver
        },
    },
    {
        path : 'retailers', 
        component:RetailersComponent,
        resolve :{
            retailers : RetailersListResolver
        },
    },
    {
        path :'retailers/:id',
        component: RetailerDetailComponent,
        resolve : {
            retailer: RetailerDetailResolver
        },
    },
    {
        path :'distributors/:id/comments',
        component: CommentsComponent,
        resolve : {
            comments: CommentsComponent
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

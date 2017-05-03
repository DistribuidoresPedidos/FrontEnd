import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RetailersComponent } from './retailers/retailers.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RegisterComponent } from './register/register.component';
import { MakeOrderComponent } from './make-order/make-order.component';


import { ProductListResolver } from './resolvers/products-list.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { RetailersListResolver } from './resolvers/retailers-list.resolver';
import { RetailerDetailResolver } from './resolvers/retailer-detail.resolver';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent},
  
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
        path : 'make_order',
        component:  MakeOrderComponent
    },
    { path:  'retailers', component: RetailersComponent },
    { path: 'landing', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule'},
    { path: '', loadChildren: 'app/dealers/dealers.module#DealersModule'},
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

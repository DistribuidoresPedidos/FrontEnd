import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RetailersComponent } from "./retailers/retailers.component";

import { AppComponent } from "./app.component";


const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'distributors', component: DistributorsComponent},
    { path: 'distributors/:id', component: DistributorDetailComponent},
    { path: 'products', component:ProductListComponent},
    /*
    { path: 'products', component: ProductsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full'},
            { path: 'list', component: ProductListComponent },
            { path: 'detail', component: ProductDetailComponent },
            { path: 'detail/:id', component: ProductDetailComponent }
        ]
    },*/
    {path:  'retailers', component:RetailersComponent},
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


import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes: Routes = [
	{ path: '', component: LandingPageComponent},
	{ path: 'distributors', component: DistributorsComponent},
	{ path: 'distributors/:id', component: DistributorDetailComponent},
    { path: 'products', component: ProductListComponent},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { 

}

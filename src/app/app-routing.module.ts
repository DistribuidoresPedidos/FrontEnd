import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LandingPageComponent} from './landing-page/landing-page.component';
import { RetailersComponent } from './retailers/retailers.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

const appRoutes: Routes = [
	{ path: '', component: LandingPageComponent},
	{ path: 'distributors', component: DistributorsComponent },
	{ path: 'retailers', component: RetailersComponent },
	{ path: 'products', component: ProductsComponent, 
		children: [
			{ path: '', redirectTo: 'list', pathMatch: 'full'},
			{ path: 'list', component: ProductListComponent },
			{ path: 'detail', component: ProductDetailComponent },
			{ path: 'detail/:id', component: ProductDetailComponent }
		]	
	}
];

@NgModule({ 
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
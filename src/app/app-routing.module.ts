import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { RetailersComponent } from './retailers/retailers.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
	{ path: 'home', component: LandingPageComponent},
	{ path: 'distributors', component: DistributorsComponent},
	{ path: 'retailers', component: RetailersComponent},
	{ path: 'products', component: ProductsComponent},
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
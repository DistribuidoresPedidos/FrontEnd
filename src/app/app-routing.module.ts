import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LandingPageComponent} from './landing-page/landing-page.component';

const appRoutes: Routes = [
	{ path: 'home', component: LandingPageComponent}
]
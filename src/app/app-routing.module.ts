import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { MakeOrderComponent } from './make-order/make-order.component';



import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent},

    {
        path : 'make_order',
        component:  MakeOrderComponent
    },

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

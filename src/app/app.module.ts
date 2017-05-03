// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Shared Module
import { SharedModule } from './shared/shared.module';

// Feature-Modules
import { LandingPageModule } from './landing-page/landing-page.module';
import { DealersModule } from './dealers/dealers.module';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RetailersComponent } from './retailers/retailers.component';

// Services
import { ProductListService } from './services/products-list.service';
import { RetailersListService } from './services/retailers-list.service';
import { Angular2TokenService } from 'angular2-token';
import { MakeOrderService} from './services/make-order.service';
import { DistributorsService } from './services/distributors.service';

// Resolvers
import { RetailersListResolver} from './resolvers/retailers-list.resolver';
import { RetailerDetailResolver} from './resolvers/retailer-detail.resolver';

// Pipes

import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RegisterComponent } from './register/register.component';
import { MakeOrderComponent } from './make-order/make-order.component';


@NgModule({
    imports: [
    BrowserModule,
    SharedModule,
    DealersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RetailersComponent,

    RetailerDetailComponent,
    RegisterComponent,

    MakeOrderComponent
  ],
  providers: [
    ProductListService,
    RetailersListService,
    MakeOrderService,
    RetailersListResolver,
    RetailerDetailResolver,
    Angular2TokenService,
    DistributorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

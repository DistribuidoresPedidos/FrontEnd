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
import { RegisterComponent } from './register/register.component';


// Services
import { Angular2TokenService } from 'angular2-token';
import { MdlDialogService } from '@angular-mdl/core';
import { ProductListService } from './services/products-list.service';
import { RetailersListService } from './services/retailers-list.service';
import { MakeOrderService} from './services/make-order.service';
import { DistributorsService } from './services/distributors.service';


@NgModule({
    imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegisterComponent,
  ],
  providers: [
    MdlDialogService,
    Angular2TokenService,
    ProductListService,
    RetailersListService,
    MakeOrderService,
    DistributorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { NguiParallaxScrollModule } from '@ngui/parallax-scroll';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { CarouselComponent } from './landing-page/content/carousel/carousel.component';
import { ContentComponent } from './landing-page/content/content.component';
import { ServicesComponent } from './landing-page/content/services/services.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { ContactComponent } from './landing-page/content/contact/contact.component';
import { CoverageComponent } from './landing-page/content/coverage/coverage.component';
import { AboutUsComponent } from './landing-page/content/about-us/about-us.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { RetailersComponent } from './retailers/retailers.component';
import { ProductDetailComponent } from './products/product-detail.component';


import { DistributorService } from './services/distributor.service';
import { ProductListService } from './services/products-list.service';
import { Angular2TokenService } from 'angular2-token';
import { RetailersListService } from "./services/retailers-list.service";


@NgModule({
    imports: [
    // NguiParallaxScrollModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CarouselComponent,
    ContentComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    CoverageComponent,
    AboutUsComponent,
    DistributorsComponent,
    DistributorDetailComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductsComponent,
    RetailersComponent,
    ProductDetailComponent
  ],

  providers: [
    ProductListService,
    DistributorService,
    Angular2TokenService,
    RetailersListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { NguiParallaxScrollModule } from '@ngui/parallax-scroll';
import { AppRoutingModule } from './app-routing.module';
import { Ng2MapModule } from 'ng2-map';

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
import { RetailersComponent } from './retailers/retailers.component';
import { ProductDetailComponent } from './products/product-detail.component';


import { DistributorService } from './services/distributor.service';
import { ProductListService } from './services/products-list.service';
// import { Angular2TokenService } from 'angular2-token';
import { RetailersListService } from './services/retailers-list.service';
import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { DistributorAddressResolver } from './resolvers/distributor-address.resolver';
import { FilterOfferedProductsNamePipe } from './pipes/filter-offered-products-name.pipe';
import { FilteredOfferedProductsCategoryPipe } from './pipes/filtered-offered-products-category.pipe';
import { FilterOfferedProductsPricePipe } from './pipes/filter-offered-products-price.pipe';


@NgModule({
    imports: [
    // NguiParallaxScrollModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs' })
  ],
  declarations: [
    FilterOfferedProductsNamePipe,
    FilteredOfferedProductsCategoryPipe,
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
    RetailersComponent,
    ProductDetailComponent,
    FilterOfferedProductsPricePipe
  ],
  providers: [
    ProductListService,
    DistributorService,
    RetailersListService,
    DistributorDetailResolver,
    DistributorListResolver,
    DistributorAddressResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

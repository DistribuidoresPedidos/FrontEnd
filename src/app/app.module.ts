// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng2MapModule } from 'ng2-map';
import { MdlModule } from '@angular-mdl/core';
import { SwiperModule } from 'angular2-useful-swiper';
import { SharedModule } from './shared/shared.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ScrollSpyModule } from 'ng2-scrollspy';
import { Md2Module } from 'md2';
import { NouisliderModule } from 'ng2-nouislider';
import { MdlSelectModule } from '@angular-mdl/select';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselComponent } from './landing-page/content/carousel/carousel.component';
import { ServicesComponent } from './landing-page/content/services/services.component';
import { ContactComponent } from './landing-page/content/contact/contact.component';
import { CoverageComponent } from './landing-page/content/coverage/coverage.component';
import { AboutUsComponent } from './landing-page/content/about-us/about-us.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RetailersComponent } from './retailers/retailers.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


// Services
import { DistributorService } from './services/distributor.service';
import { ProductListService } from './services/products-list.service';
import { RetailersListService } from './services/retailers-list.service';
import { Angular2TokenService } from 'angular2-token';
import { CommentService } from './services/comment.service';
import { MakeOrderService} from './services/make-order.service';

// Resolvers
import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { ProductListResolver} from './resolvers/products-list.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { RetailersListResolver} from './resolvers/retailers-list.resolver';
import { RetailerDetailResolver} from './resolvers/retailer-detail.resolver';
import { DistributorCommentsResolver } from './resolvers/distributor-comments.resolver';
// Pipes
import { FilterOfferedProductsNamePipe } from './pipes/filter-offered-products-name.pipe';
import { FilteredOfferedProductsCategoryPipe } from './pipes/filtered-offered-products-category.pipe';
import { FilterOfferedProductsPricePipe } from './pipes/filter-offered-products-price.pipe';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RegisterComponent } from './register/register.component';
import { CommentsComponent } from './comments/comments.component';
import { MakeOrderComponent } from './make-order/make-order.component';


@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MdlModule,
    SwiperModule,
    SharedModule,
    Md2Module,
    NouisliderModule,
    MdlSelectModule,
    Ng2PageScrollModule.forRoot(),
    ScrollSpyModule.forRoot(),
    Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs' })
  ],
  declarations: [
    FilterOfferedProductsNamePipe,
    FilteredOfferedProductsCategoryPipe,
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    ServicesComponent,
    ContactComponent,
    CoverageComponent,
    AboutUsComponent,
    DistributorsComponent,
    DistributorDetailComponent,
    PageNotFoundComponent,
    ProductListComponent,
    RetailersComponent,
    ProductDetailComponent,
    FilterOfferedProductsPricePipe,
    RetailerDetailComponent,
    RegisterComponent,
    CommentsComponent,
    FilterOfferedProductsPricePipe,
    MakeOrderComponent
  ],
  providers: [
    ProductListService,
    DistributorService,
    RetailersListService,
    MakeOrderService,
    DistributorDetailResolver,
    DistributorListResolver,
    ProductListResolver,
    ProductDetailResolver,
    RetailersListResolver,
    RetailerDetailResolver,
    DistributorCommentsResolver,
    Angular2TokenService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

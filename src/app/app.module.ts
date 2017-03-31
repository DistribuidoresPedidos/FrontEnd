import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { NguiParallaxScrollModule } from '@ngui/parallax-scroll';

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



@NgModule({
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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NguiParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

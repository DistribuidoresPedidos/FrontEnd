// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../shared/shared.module';

// Routing Module
import { LandingPageRoutingModule } from './landing-page-routing.module';

// External Library Modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ScrollSpyModule } from 'ng2-scrollspy';

// Components
import { LandingPageComponent } from './landing-page.component';
import { CarouselComponent } from './content/carousel/carousel.component';
import { ServicesComponent } from './content/services/services.component';
import { CoverageComponent } from './content/coverage/coverage.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ContactComponent } from './content/contact/contact.component';


@NgModule({
  imports: [
    Ng2PageScrollModule.forRoot(),
    ScrollSpyModule.forRoot(),
    SharedModule,
    LandingPageRoutingModule,
  ],
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    ServicesComponent,
    CoverageComponent,
    AboutUsComponent,
    ContactComponent
  ]
})
export class LandingPageModule { }

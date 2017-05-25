// Angular Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// External Library Modules
import { ScrollEventModule, SCROLL_EVENT_TIME } from 'ng2-events/lib/scroll';
import { Md2Module } from 'md2';
import { SwiperModule } from 'angular2-useful-swiper';
import { MdlModule } from '@angular-mdl/core';
import { NouisliderModule } from 'ng2-nouislider';
import { MdlSelectModule } from '@angular-mdl/select';
import { Ng2MapModule } from 'ng2-map';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { Ng2SelectModule } from 'ng2-material-select';
//charts


@NgModule({
    imports: [
        ScrollEventModule,
        Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs' }),
        
        Ng2SelectModule
    ],
    exports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdlModule,
        Md2Module,

        NouisliderModule,
        SwiperModule,
        ScrollEventModule,
        Ng2MapModule
    ],
    providers: [
        {provide: SCROLL_EVENT_TIME, useValue: 200}
    ]

})
export class SharedModule {

}

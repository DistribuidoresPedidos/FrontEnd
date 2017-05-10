// Angular Modules
import { NgModule } from '@angular/core';
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
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
    imports: [
        ScrollEventModule,
        Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCzikUZvUagG1tusaTczWY7AR8qtPyISFs' }),
        CurrencyMaskModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdlModule,
        Md2Module,
        MdlSelectModule,
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

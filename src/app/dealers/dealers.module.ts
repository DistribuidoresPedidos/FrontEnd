// Angular Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Routing Module
import { DealersRoutingModule } from './dealers-routing.module';

// Component
import { DealersComponent } from './dealers.component';



@NgModule({
  imports: [
    SharedModule,
    DealersRoutingModule
  ],
  declarations: [
    DealersComponent,
  ]
})
export class DealersModule { }

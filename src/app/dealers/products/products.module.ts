// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { ProductsRoutingModule } from './products-routing.module';


// Service


@NgModule({
  imports: [
    SharedModule,
    DistributorsRoutingModule
  ],
  declarations: [
    DistributorsComponent,
    DistributorListComponent,
    DistributorDetailComponent
  ],
  providers: [
  ]
})
export class ProductsModule { }

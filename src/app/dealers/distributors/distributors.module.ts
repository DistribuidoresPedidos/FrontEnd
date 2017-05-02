// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { DistributorsRoutingModule } from './distributors-routing.module';

// Components
import { DistributorsComponent } from './distributors.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';

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
export class DistributorsModule { }

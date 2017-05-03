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
import { DistributorCommentsComponent } from './distributor-comments/distributor-comments.component';

// Resolvers
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorCommentsResolver } from './resolvers/distributor-comments.resolver';


@NgModule({
  imports: [
    SharedModule,
    DistributorsRoutingModule
  ],
  declarations: [
    DistributorsComponent,
    DistributorListComponent,
    DistributorDetailComponent,
    DistributorCommentsComponent
  ],
  providers: [
    DistributorListResolver,
    DistributorDetailResolver,
    DistributorCommentsResolver
  ]
})
export class DistributorsModule { }

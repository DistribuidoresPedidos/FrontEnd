// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { RetailersRoutingModule } from './retailers-routing.module';

// Components
import { RetailersComponent } from './retailers.component';
import { RetailersListComponent } from './retailers-list/retailers-list.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';

// Resolvers
import { RetailersListResolver } from './resolvers/retailers-list.resolver';
import { RetailerDetailResolver } from './resolvers/retailer-detail.resolver';

//Pagination Module
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    SharedModule,
    RetailersRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    RetailersComponent,
    RetailersListComponent,
    RetailerDetailComponent
  ],
  providers: [
    RetailersListResolver,
    RetailerDetailResolver
  ]
})
export class RetailersModule { }

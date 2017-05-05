// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RetailersComponent } from './retailers.component';
import { RetailersListComponent } from './retailers-list/retailers-list.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';

// Resolvers
import { RetailerDetailResolver } from './resolvers/retailer-detail.resolver';
import { RetailersListResolver } from './resolvers/retailers-list.resolver';

const retailersRoutes = [
    {
        path: '',
        component: RetailersComponent,
        children: [
            {
                path: ':id',
                component: RetailerDetailComponent,
                resolve: {
                    retailer: RetailerDetailResolver
                }
            },
            {
                path: '',
                component: RetailersListComponent,
                resolve: {
                    retailers: RetailersListResolver
                }
            }
        ]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(retailersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class RetailersRoutingModule { }
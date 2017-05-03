// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DistributorsComponent } from './distributors.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';

// Resolvers
import { DistributorDetailResolver } from './resolvers/distributor-detail.resolver';
import { DistributorListResolver } from './resolvers/distributor-list.resolver';
import { DistributorCommentsResolver } from './resolvers/distributor-comments.resolver';

const distributorsRoutes = [
    {
        path: '',
        component: DistributorsComponent,
        children: [
            {
                path: ':id',
                component: DistributorDetailComponent,
                resolve: {
                    distributor: DistributorDetailResolver,
                    distributorComments: DistributorCommentsResolver
                }
            },
            {
                path: '',
                component: DistributorListComponent,
                resolve: {
                    distributors: DistributorListResolver
                }
            }
        ]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(distributorsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class DistributorsRoutingModule { }
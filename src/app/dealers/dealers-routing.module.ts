// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DealersComponent } from './dealers.component';

const dealersRoutes = [
    {
        path: '',
        component: DealersComponent,
        children: [
            {
                path: 'distributors',
                loadChildren: 'app/dealers/distributors/distributors.module#DistributorsModule',
            },
            {
                path: '',
                loadChildren: 'app/dealers/dashboard/dashboard.module#DashboardModule',
            }
        ]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(dealersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class DealersRoutingModule { }
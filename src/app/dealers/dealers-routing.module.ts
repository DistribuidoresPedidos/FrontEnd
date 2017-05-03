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
                path : 'orders',
                loadChildren : 'app/dealers/orders/orders.module#OrdersModule'
            },
            {   path: 'products',
                loadChildren: 'app/dealers/products/products.module#ProductsModule'
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

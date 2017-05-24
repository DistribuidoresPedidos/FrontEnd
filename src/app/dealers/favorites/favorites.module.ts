// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { FavoritesRoutingModule } from './favorites-routing.module';

// Components
import { FavoritesComponent } from './favorites.component';

// Resolvers
import { FavoritesDistributorsListResolver } from './resolvers/favorites-distributors-list.resolver';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    SharedModule,
    FavoritesRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    FavoritesComponent,
  ],
  providers: [
    FavoritesDistributorsListResolver,
  ]
})
export class FavoritesModule { }

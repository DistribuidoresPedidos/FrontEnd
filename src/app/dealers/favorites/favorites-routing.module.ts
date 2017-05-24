// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FavoritesComponent } from './favorites.component';

// Resolvers
import { FavoritesDistributorsListResolver } from './resolvers/favorites-distributors-list.resolver';

const favoritesRoutes = [
    {
        path: '',
        component: FavoritesComponent,
        resolve: {
            favorites: FavoritesDistributorsListResolver,
        }
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(favoritesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class FavoritesRoutingModule { }
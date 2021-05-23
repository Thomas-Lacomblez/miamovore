import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../guards/home/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate : [HomeGuard],
    resolve: {
      userData: UserDataResolver
    }
  },
  {
    path: 'home/folder/:id',
    canActivate : [HomeGuard],
    loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home/item-details',
    canActivate : [HomeGuard],
    loadChildren: () => import('../item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'home/my-cart',
    canActivate : [HomeGuard],
    loadChildren: () => import('../my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'home/profile',
    canActivate : [HomeGuard],
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home/my-orders',
    canActivate : [HomeGuard],
    loadChildren: () => import('../my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'home/favorite',
    canActivate : [HomeGuard],
    loadChildren: () => import('../favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'home/checkout',
    canActivate : [HomeGuard],
    loadChildren: () => import('../checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'home/confirm',
    canActivate : [HomeGuard],
    loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'home/categorie-details',
    canActivate : [HomeGuard],
    loadChildren: () => import('../categorie-details/categorie-details.module').then( m => m.CategorieDetailsPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { DashboardComponent } from './shop/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'shop'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

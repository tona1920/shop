import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const rutas: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dash', component: DashboardComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminWrapper } from './admin-wrapper/admin-wrapper';
import { AdminRoutingModule } from './admin-routing-module';



@NgModule({
  declarations: [
    AdminWrapper
  ],
  imports: [
    CommonModule,
   AdminRoutingModule
  ]
})
export class AdminModule { }

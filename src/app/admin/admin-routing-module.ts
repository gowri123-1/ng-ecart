import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWrapper } from './admin-wrapper/admin-wrapper';

const routes: Routes = [
    {
        path : '',
        component: AdminWrapper
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
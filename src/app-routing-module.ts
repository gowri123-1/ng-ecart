// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// // const routes: Routes = [];
// const routes: Routes = [
//   {
//     path: 'products',
//     loadChildren: () => import('./app/products/products-module').then(m => m.ProductsModule)
//   },
//   {
//     path: 'admin',
//     loadChildren: () => import('./app/admin/admin-module').then(m => m.AdminModule)
//   } 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Product } from './components/product/product';
import { AuthGuard, AuthGuardSellerAccess } from './app/auth-guard';
import { CreateProduct } from './app/create-product/create-product';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'products', component: Product, canActivate: [AuthGuard] },
  { path: 'createProducts', component: CreateProduct, canActivate: [AuthGuardSellerAccess] } // protected
  // protected
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

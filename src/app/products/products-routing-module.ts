import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

const routes: Routes = [
  {
    path: '',
    component: Products,
    children: [
      { path: '', component: ProductList },
      { path: 'detail/:id', component: ProductDetail }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
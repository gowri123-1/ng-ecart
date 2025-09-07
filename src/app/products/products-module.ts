import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Products } from './products/products';
import { ProductsRoutingModule } from './products-routing-module';



@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
    Products,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

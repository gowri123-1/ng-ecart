import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
   productsList = [] as any;

  constructor(private productsService: ProductsService) {
    this.productsList = this.productsService.getProducts();
  }
  ngOnInit() {
    // Local Storage vs Session Storage
    const userDetails = { name: 'Abc', age: 28, email: 'abc@gmail.com' };
    // Object to String = JSON.stringify(obj);
    // String to Object = JSON.parse(str);
    // localStorage.setItem('userData', JSON.stringify(userDetails));
    // localStorage.setItem('tempValue', '123');
    // localStorage.setItem('tempValue1', '4324');
    sessionStorage.setItem('userData', JSON.stringify(userDetails));
    sessionStorage.setItem('tempValue', '123');
    sessionStorage.setItem('tempValue1', '4324');
  }

  sendMessageFromComponent() {
    this.productsService.sendMessage('This is my message from product list component');
  }

  triggerObservable() {
    this.productsService.filterByRxJSOperator();
  }

}

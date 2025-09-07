import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit{
  constructor(private productService: ProductsService) {

  }
 
  ngOnInit() {
     this.productService.currentSubjectListener.subscribe(data => {
      console.log('Received data in Products component ', data);
    }
    )
  }

}

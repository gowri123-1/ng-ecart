import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
productId: string | undefined | any;
  productDetails: any;
  userData: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit() {
    this.productDetails = this.productsService.getProductById(this.productId)
     const userActualData = localStorage.getItem('userData') as any;
    this.userData = JSON.parse(userActualData); // String to object
  }
   removeLocalData() {
    // localStorage.removeItem('userData');
    sessionStorage.removeItem('userData');
  }

  deleteLocalData() {
    // localStorage.clear();
    sessionStorage.clear();
  }

}


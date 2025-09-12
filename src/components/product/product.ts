import { Component } from '@angular/core';
import { ProductsService } from '../../app/products/products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  products: any[] = [];
  searchTerm: string = "";

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data; // backend sends { data: products }
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  search(){
    this.productsService.searchProduct(this.searchTerm).subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }

}


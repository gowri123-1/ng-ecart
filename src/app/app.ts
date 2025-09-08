import { Component, signal } from '@angular/core';
import { TemplateDrivenForm } from '../components/template-driven-form/template-driven-form';
import { Router } from '@angular/router';
// import { ProductsService } from './products/products-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  // protected readonly title = signal('angular-class-demo');
  // constructor(private productService: ProductsService) {

  // }

  // ngOnInit() {
  //   this.productService.currentSubjectListener.subscribe(data => {
  //     console.log('Received data in APP component ', data);
  //   }
  //   )

  // }

  constructor(private router: Router) {}

  token: string | null = null;

  ngOnInit(): void {
    // get token from localStorage
    this.token = localStorage.getItem('authToken');
  }

  createProduct(){
    this.router.navigate(['/createProducts']);
  }
}

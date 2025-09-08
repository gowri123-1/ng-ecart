import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, interval, map, of, Subject } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

   private apiUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
   // Service as a singleton.
  // Subject and BehaviorSubject from RxJS for reactive state.
  // Push updates and subscribe anywhere.

  // private messageSource = new Subject<string>;
  private messageSource = new BehaviorSubject<string>('This is initial value!');

  public currentSubjectListener = this.messageSource.asObservable();
  productsList = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 2334,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      price: 1200,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      price: 34534,
    },
  ];

  // getProducts() {
  //   return this.productsList;
  // }

  getProductById(id: number) {
    return this.productsList.find((product) => product.id == id);
  }
  sendMessage(message: any) {
    this.messageSource.next(message);
  }
   // Operators

  //   Key Topics:
  // Observables, Subscribers.
  // Operators: map, filter, tap, switchMap.
  // from, of, interval.

  filterByRxJSOperator() {
    const simpleObservable = of(1, 2, 3, 4, 5, 6);

    simpleObservable.subscribe((data) => {
      console.log('From Observable => ', data);
    });

    // 10, 20, 30
    // Map operator
    simpleObservable
      .pipe(map((x) => x * 10))
      .subscribe((data) => console.log('Map Transformed Value ', data));

    // Filter
    simpleObservable.pipe(filter((x) => x % 2 === 0)).subscribe((data) => {
      console.log('Filter Transformed Value ', data);
    });

    // interval(1000).subscribe(val => console.log(val));
  }

}




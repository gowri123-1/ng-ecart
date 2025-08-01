import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-users',
  standalone: false,
  templateUrl: './display-users.html',
  styleUrl: './display-users.scss',
})
export class DisplayUsers implements OnInit, OnChanges, OnDestroy {
  users: any;
  photosData: any;
  subscription: any;
  observable = new Observable((observer) => {
    observer.next('First Value');
    observer.complete();
  });
  setIntervalSub: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Component loaded');
    this.setIntervalSub = setTimeout(()=> {
      console.log('setTimeout Called')
    }, 3000);
    console.log(this.setIntervalSub)
    // this.getUsersData();
  }

  ngOnChanges(changes: any) {
    console.log(changes)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearTimeout(this.setIntervalSub);
  }

  

  // GET, PUT, POST - HTTP methods  - CRUD Operations // Create => POST, Read => GET, Update => Put, Delete => Delete

  getUsersData() {
    console.log('getUsersData method called!');
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log(response);
        this.users = response;
      });
  }

  addUser() {
    const newUser = {
      name: 'New User',
      email: 'user@gmail.com',
      age: '28',
    };

    this.http
      .put('https://jsonplaceholder.typicode.com/users', newUser)
      .subscribe(
        (response) => {
          console.log(response);
          alert(`${newUser.name} user added successfully!`);
        },
        (error) => {
          alert('Adding user failed!');
        }
      );
  }

  displayPhotos() {
    const observable = this.http.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    observable.subscribe(
      (response) => {
        console.log(response);
        this.photosData = response;
      },
      (error) => {
        console.log('Error found');
      }
    );
  }

  subscribeObservable() {
    this.subscription = this.observable.subscribe((response) => {
      console.log(response);
    });
  }
}

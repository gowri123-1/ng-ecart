import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-users',
  standalone: false,
  templateUrl: './display-users.html',
  styleUrl: './display-users.scss',
})
export class DisplayUsers implements OnInit {
  users: any;
  photosData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Component loaded');
    // this.getUsersData();
  }

// GET, PUT, POST - HTTP methods  - CRUD Operations // Create => POST, Read => GET, Update => Put, Delete => Delete

  getUsersData() {
    console.log('getUsersData method called!')
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    )

  }

  displayPhotos() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(
      (response) => {
        console.log(response);
        this.photosData = response;
      }
    )
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

   formData = {
    name: '',
    email: '',
    password: ''
  };

  
  constructor(private http: HttpClient, private router: Router) {}

  submitForm(contactForm: any) {
    
    if (contactForm.valid) {
      this.http.post<any>('http://localhost:5000/api/users/login', this.formData)
        .subscribe({
          next: (response) => {
            // save token
            console.log("response",response)
            localStorage.setItem('authToken', response.accessToken
);
            alert('Login Successful!');

            // redirect to products page
            this.router.navigate(['/products']);
          },
          error: () => {
            alert('Invalid credentials');
          }
        });
    }console.log(contactForm)
  }
}


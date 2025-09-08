import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable() 
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('authToken') // Retrieve the token from local storage
    console.log(token)
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}

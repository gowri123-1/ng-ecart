// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken')  || '';
    if (token) {
      return true; // ✅ allow access
    }
    this.router.navigate(['/login']); // ❌ block if no token
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardSellerAccess implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const authToken = localStorage.getItem('authToken');
    console.log("token", authToken)
    const userData = JSON.parse(localStorage.getItem('userData') as any)
    if (userData?.role === 'seller' || userData?.role === 'admin') {
      return true; // ✅ allow access
    }
    this.router.navigate(['/login']); // ❌ block if no token
    return false;
  }
}
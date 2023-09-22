import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Injectable } from '@angular/core';

 

@Injectable({

  providedIn: 'root',

})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check for the presence of a token in local storage
    const token = localStorage.getItem('token');
    const tokens = sessionStorage.getItem('token');
    if (tokens) {
      // You can also check the token's validity here, e.g., by decoding and verifying it
      // For simplicity, we'll assume it's valid if it exists
      return true;
    } else {
      // Token is not present or invalid, so redirect to the login page
      this.router.navigateByUrl('');
      return false;

    }

  }

}
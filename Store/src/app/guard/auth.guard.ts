import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

 @Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private router: Router, private localStorageService : LocalStorageService) { }

   canActivate(): boolean {
    const token = this.localStorageService.getItem('token')
    if (token.user.role === 'client') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

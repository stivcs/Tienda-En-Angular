import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

 @Injectable({
  providedIn: 'root'
})
export class TokenGuardAdminLogin implements CanActivate {
  constructor(private router: Router, private localStorageService : LocalStorageService) { }

   canActivate(): boolean {
    const token = this.localStorageService.getItem('token')
    if (token){
      if (token.user.role === 'admin') {
        return true;
      }
    }
    return false;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenGuardLogin } from './authLogin.guard';
import { TokenGuardAdminLogin } from './adminLogin.guard';

@Injectable({
  providedIn: 'root'
})
export class CombinedTokenGuard implements CanActivate {
  constructor(private router: Router, private tokenGuard: TokenGuardLogin, private tokenGuardAdmin: TokenGuardAdminLogin) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Lógica para verificar si ambos TokenGuard y TokenGuardAdmin retornan falso
    const isTokenValid = this.tokenGuard.canActivate();
    const isAdminTokenValid = this.tokenGuardAdmin.canActivate();
    console.log(isAdminTokenValid, isAdminTokenValid);

    if (!isTokenValid && !isAdminTokenValid){
      return !isTokenValid && !isAdminTokenValid;
    }else{
      this.router.navigate(['']);
      return isTokenValid && isAdminTokenValid;
    }


  }
}

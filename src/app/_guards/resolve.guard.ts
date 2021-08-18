import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private _router:Router ,
    private productService:AuthService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

      return this.productService.getProduct()


  }


}

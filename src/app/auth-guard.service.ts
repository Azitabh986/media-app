import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 private role;
  constructor(private _router:Router,private sharedService:SharedService ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      this.sharedService.getRole().subscribe(res=>{
        this.role=res;
      })
      if(this.role!='private'){
        return false;
      }
      return true;
      
  }

}

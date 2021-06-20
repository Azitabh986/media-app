import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { EncrDecrService } from './encrypt/encr-decr.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 private userType;
  constructor(private sharedService:SharedService,private EncrDecr: EncrDecrService ) {
  }

  canActivate(): boolean {
      this.sharedService.getUserType().subscribe(res=>{
        this.userType=res;
      })
      if(!this.userType){
        var decrypted = this.EncrDecr.get('123456$#@$^@1ERF',sessionStorage.getItem('userValue'));
        this.userType=decrypted;
      }
      if(this.userType!='private'){
        return false;
      }
      return true;
      
  }

}

import { Component, OnInit } from '@angular/core';
import { EncrDecrService } from '../encrypt/encr-decr.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showLoginForm:boolean;
  public userName:string;
  public logoutEnable:boolean;
  public type:any;
  private passCode;
  private encrypted:string;
  constructor(private serviceService:SharedService,private EncrDecr: EncrDecrService) { }

  ngOnInit(): void {
    this.serviceService.getUserName().subscribe(res=>{
      this.userName=res;
      this.logoutEnable=true;
      sessionStorage.setItem("userName",res);
    })
    this.serviceService.getUserType().subscribe(res=>{
      this.type=res;
      this.encrypted = this.EncrDecr.set('123456$#@$^@1ERF',this.type);
      sessionStorage.setItem("userValue",this.encrypted);
    })
    if(sessionStorage.getItem("userName")){
      this.userName=sessionStorage.getItem("userName");
      this.logoutEnable=true;
      var decrypted = this.EncrDecr.get('123456$#@$^@1ERF',sessionStorage.getItem('userValue'));
      this.type=decrypted;
    }
    
  }
  loginEvent(){
    this.showLoginForm=!this.showLoginForm;
  }
  logoutEvent(){
    this.userName=null;
    this.showLoginForm=false;
    this.logoutEnable=false;
    this.type='';
    sessionStorage.clear();
  }

}

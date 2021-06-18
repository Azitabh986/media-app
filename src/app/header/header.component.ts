import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public role:any;
  constructor(private serviceService:SharedService) { }

  ngOnInit(): void {
    this.serviceService.getUserName().subscribe(res=>{
      this.userName=res;
      this.logoutEnable=true;
    })
    this.serviceService.getRole().subscribe(res=>{
      this.role=res;
    })
  }
  loginEvent(){
    this.showLoginForm=!this.showLoginForm;
  }
  logoutEvent(){
    this.userName=null;
    this.showLoginForm=false;
    this.logoutEnable=false;
    this.role='';
  }

}

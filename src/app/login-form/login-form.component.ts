import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import  { usersDB }  from 'src/app/db-data/db-data.json';
import {  SharedService } from '../shared.service';
import { userInfo } from './login-form.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  public checkLoginValidated:boolean;
  userData:Array<userInfo>;
  userName:string;
  close:boolean;
  constructor(private serviceService: SharedService) {
    this.userData=usersDB;
   }
  profileForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.profileForm.value['userId'] && this.profileForm.value['password'])
      this.checkLoginValidated=this.checkLoginValid(this.profileForm.value['userId'],this.profileForm.value['password']);
      if(!this.checkLoginValidated){
        window.alert("Login Failed Enter the details Again"); 
      }
  }
  checkLoginValid(userId,password){
    let returnValue=false;
    for(let i=0;this.userData.length;i++){
     try{
      if(this.userData[i]['userid']==userId && this.userData[i]['password']==password){
        this.serviceService.setUserName(this.userData[i]['username']);
        this.serviceService.setRole(this.userData[i]['role']);
        returnValue=true;
        break;
      }
     }catch(error){
      return returnValue;
     }

    }   
    return returnValue;
  }
  closeEvent(){
    this.close=!this.close;
  }
}

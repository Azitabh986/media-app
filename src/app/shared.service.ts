import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userName=new Subject<string>();
  private userType=new Subject<any>();
  constructor() { }
  setUserName(value){
    this.userName.next(value);
  }
  getUserName(){
    return this.userName;
  }
  setUserType(value){
    this.userType.next(value);
  }
  getUserType(){
    return this.userType;
  }
}

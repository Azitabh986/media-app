import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userName=new Subject<string>();
  private role=new Subject<any>();
  constructor() { }
  setUserName(value){
    this.userName.next(value);
  }
  getUserName(){
    return this.userName;
  }
  setRole(value){
    this.role.next(value);
  }
  getRole(){
    return this.role;
  }
}

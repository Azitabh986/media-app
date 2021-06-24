import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  tempArrayListName: string[];
  textAreaValue: any;
  showDropdown:boolean;
  selectedValueCss:any='';
  maintainValue:string[]=[];
  constructor() { }
  
  public arrayListName= ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula M. Keith"];
  ngOnInit(): void {
  }

  keyUpEvent(event){
    let value=event.target.value;
    value=value.replace(/\s/g, "");
    if(value == '@'){
      this.tempArrayListName=this.arrayListName;
      this.selectedValueCss='';
    }
    if(value == '@')
      this.showDropdown=true;
    else
      this.showDropdown=false;
  }
  setValue(data){
    this.textAreaValue=data;
    this.selectedValueCss='textAreaCssValue';
    this.showDropdown=false;
  }
}

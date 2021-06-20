import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html'
})
export class GalleryPageComponent implements OnInit {
public imageArray=[];
  constructor() { }

  ngOnInit(): void {
    for(let i=1;i<10;i++){
      this.imageArray[i-1]="./assets/images/"+i+".png";
    }
  }

}

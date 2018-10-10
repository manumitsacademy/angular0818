import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  firstname="Praveen";
  lastname;
  constructor() { }

  ngOnInit() {
  }

  xyz(e:Event){
    this.lastname=e;
  }

}

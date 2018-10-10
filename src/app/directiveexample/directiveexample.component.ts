import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveexample',
  templateUrl: './directiveexample.component.html',
  styleUrls: ['./directiveexample.component.css']
})
export class DirectiveexampleComponent implements OnInit {
  flag=false;
  constructor() { }
  students=[
    {
      firstname:"madhoo",
      lastname:'velpuri',
      location:'Hyd'
    },
    {
      firstname:"sharada",
      lastname:'',
      location:'canada'
    },
    {
      firstname:"praveen",
      lastname:'gubbala',
      location:'pune'
    }
  ];
  ngOnInit() {
  }

  abc(){
    console.log("im called")
  }
}

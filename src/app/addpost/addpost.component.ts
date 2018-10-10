import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  abc(x){
    console.log(x);
  }
  constructor() { }

  ngOnInit() {
  }

}

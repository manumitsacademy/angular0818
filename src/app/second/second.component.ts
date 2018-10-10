import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  @Input() fn;

  @Output() ln=new EventEmitter();
  
  ngOnInit() {
    var x;
    this.ln.emit({lname:"Gubbala"});
  }
  
}

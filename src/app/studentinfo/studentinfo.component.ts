import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  currentstudent;
  constructor(public aR:ActivatedRoute) {
    this.aR.params.subscribe((res)=>{
      this.currentstudent=JSON.parse(res.st);
    });
   }

  ngOnInit() {
  }

}

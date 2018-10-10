import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  url="https://api.mlab.com/api/1/databases/abcd/collections/students?apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy"
  constructor(public http:HttpClient) {
    this.http.get(this.url).subscribe((res)=>{
      this.studentsList=res;
    });
   }
  studentsList;
  ngOnInit() {
  }

}

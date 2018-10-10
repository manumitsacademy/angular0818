import { Component, OnInit } from '@angular/core';
import {User } from '.././user.model';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(public http:HttpClient) {
    this.userform.setValue({username:'praveen',password:'123'});
   }

  userform = new User().userform;

  ngOnInit() {
  }
  abc(){
    console.log(this.userform);
  } 
}

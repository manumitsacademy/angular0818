import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regForm;
  constructor(public fb:FormBuilder,public http:HttpClient) { 
    
  }
 ngOnInit(){
  this.regForm = this.fb.group({
    username:['',[Validators.required,Validators.minLength(6)],this.uniqueUser.bind(this)],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmpassword:['',[Validators.required,Validators.minLength(6),this.checksame.bind(this)]],
    emailid:['',[Validators.required,Validators.email]]
  })
 }
 url="https://api.mlab.com/api/1/databases/manumits/collections/users?apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy";
 uniqueUser(a){
   return this.http.get(this.url).pipe(map((res)=>{
     for(let i=0;i<res['length'];i++)
     {
       if(a.value === res[i].username){
         return {'username error':'username already used'}
       }
     }
     return null;
   }))
   
 }
  checksame(){  
    if(this.regForm) {
      if(this.regForm.controls['password'].value===this.regForm.controls['confirmpassword'].value)
      {
        return null;
      }
      else{
        return {"err":"did not match the password"}
      }
    }
    else{
      return null;
    }
  }
  abc()
  {
    console.log(this.regForm);

  }
}

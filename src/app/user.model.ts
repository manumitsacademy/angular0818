import {FormBuilder} from '@angular/forms';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import {UniVal} from './uniqeval';
export class User{
    /*fb = new FormBuilder();
    userform = this.fb.group({
        username:["User name Please"],
        password:[]
    })*/
    userform = new FormGroup({
        username:new FormControl('',[Validators.required,Validators.minLength(3),this.checkSpace]),
        password:new FormControl("")
    });
    checkSpace(x){
        if(x.value.indexOf(" ")!=-1){
            return {'thappu':'username cannot have space'}
        }
        else{
            return null;
        }
    }
    
}
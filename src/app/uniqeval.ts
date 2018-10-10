
import {HttpClient, HttpHandler, HttpRequest} from '@angular/common/http';
export class UniVal{
    
    constructor(public http:HttpClient){}
    checkUser(x){

        console.log("HI");        
        var url=`https://api.mlab.com/api/1/databases/abcd/collections/users?q={"username": ${x.value}}&apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy`;
        this.http.get(url).subscribe((res)=>{
            console.log(res)
        });      
        return Promise.resolve(null)
    }
}
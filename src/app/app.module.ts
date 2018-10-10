import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { FooterComponent } from './footer/footer.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveexampleComponent } from './directiveexample/directiveexample.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import {UserformComponent} from './userform/userform.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainareaComponent,
    FooterComponent,
    TaskDetailsComponent,
    FirstComponent,
    SecondComponent,
    DirectiveexampleComponent,
    HomeComponent,
    AddpostComponent,
    AddcourseComponent,
    StudentdetailsComponent,
    StudentinfoComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"one",
        component:FirstComponent
      },
      {
        path:"two",
        component:SecondComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"addpost",
        component:AddpostComponent
      },
      {
        path:"addcourse",
        component:AddcourseComponent
      },
      {
        path:"students",
        component:StudentdetailsComponent
      },
      {
        path:"userform",
        component:UserformComponent
      },
      {
        path:":st",
        component:StudentinfoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

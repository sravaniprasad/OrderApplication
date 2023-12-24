import { Component,OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  show=false;
  

  openpopup(){
   // this.show=true;
  }
login:FormGroup|any;
  constructor(private formbuilder:FormBuilder, private _route:Router ,private _http: HttpClient){}
  showpassword=false;
  icon=faCoffee;
  
  Show(){
    this.showpassword=!this.showpassword;
  }
  ngOnInit():void{ 
    this.login=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(10)])
    });

  }
  
  logindata(){
    console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/signupusers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.login.value.email && a.password===this.login.value.password
      });
      if(user){
        alert("Login Success");
        this.login.reset();
        this._route.navigate(['itemslist'])
      }else{
        alert("User Not Found!!")
      }
    },err=>{
      alert("Something Went Wrong!!!");
    })

  }
}

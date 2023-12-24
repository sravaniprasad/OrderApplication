
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Users } from '../interfaces/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 public signup !:FormGroup|any;
  signuser:any;
  constructor(private _authService:AuthService, private _router:Router,private _http:HttpClient){}
  ngOnInit():void{
    this.signup=new FormGroup({
      'firstname':new FormControl(null,[Validators.required]),
      'location':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(10)])
    })

  }
  // clicksubmit(){
  //   console.log(this.signup.value);
  //   this.signup.reset();
  // }
  signupdata(Values:any){
   console.log(this.signup.value);
    this.signuser=this.signup.value.firstname
   this._http.post<any>("http://localhost:3000/signupusers",this.signup.value)
   .subscribe(res=>{
        
     alert("data added successfull");
     this.signup.reset();
    this._router.navigate(['login']);
       },err=>{
   alert("something went wrong");
   })



   }
}

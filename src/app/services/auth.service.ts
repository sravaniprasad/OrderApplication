import { Injectable } from '@angular/core';
import { Users } from '../interfaces/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl='http://localhost:3000';
  constructor( private _http:HttpClient) { }
  signupdata(userDetails:Users){
   return this._http.post(`${this.baseUrl}/signupusers`,userDetails);
  
  }
}

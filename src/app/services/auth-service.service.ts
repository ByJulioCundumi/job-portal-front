import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserDTO, IUserLogin, IUserRegister } from '../models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  registerRequest = (data:IUserRegister) => {
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.post<Observable<IUserDTO>>("http://localhost:3000/api/register", data, options)
  }

  loginRequest = (data:IUserLogin) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.http.post<Observable<IUserDTO>>("http://localhost:3000/api/login", data, options)
  }

  logoutRequest = ()=>{
    const options = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      }),
      withCredentials:true
    }
    return this.http.post<Observable<any>>("http://localhost:3000/api/logout", {}, options)
  }

  verifyAccessRequest = ()=>{
    const options = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      }),
      withCredentials:true
    }
    return this.http.get<Observable<IUserDTO>>("http://localhost:3000/api/verify-access", options)
  }
}

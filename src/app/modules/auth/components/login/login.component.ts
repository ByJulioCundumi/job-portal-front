import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { userStateSelector } from 'src/app/state/userState/user.selector';
import { setUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private service:AuthServiceService, private store:Store<IState>, private route:Router){}

  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      email: ["", [Validators.email, Validators.required, Validators.minLength(13)]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  hasErrors = (name:string, error:string)=>{
    return this.loginForm.get(name) && this.loginForm.get(name)?.hasError(error) && this.loginForm.get(name)?.touched
  }

  submitForm = ()=>{
    this.service.loginRequest(this.loginForm.value).subscribe((user:any)=>{
      if(user.id){
        this.store.dispatch(setUser({user}))
      }
    })
  }
}

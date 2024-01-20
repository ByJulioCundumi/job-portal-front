import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { setUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private service:AuthServiceService, private store:Store){}

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

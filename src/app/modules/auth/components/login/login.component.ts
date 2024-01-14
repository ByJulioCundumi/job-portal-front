import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder){}

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
    console.log(this.loginForm.invalid)
    console.log(this.loginForm)
  }
}

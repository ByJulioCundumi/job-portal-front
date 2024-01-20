import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUserDTO } from 'src/app/models/IUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { setUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private service:AuthServiceService, private store:Store){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ["", [Validators.required], Validators.minLength(2)],
      email: ["", [Validators.required], Validators.minLength(13)],
      password: ["", [Validators.required, Validators.minLength(8)]],
      conf_password: ["", [Validators.required, Validators.minLength(8)]],
      role: ["user",]
    })
  }

  hasErrors = (name:string, type:string)=>{
    return this.registerForm.get(name) && this.registerForm.get(name)?.hasError(type) && this.registerForm.get(name)?.touched
  }


  submitForm = async()=>{
    try {
      this.service.registerRequest(this.registerForm.value).subscribe((user:any)=>{
        this.store.dispatch(setUser({user}))
      })
    } catch (error) {
      console.log(error)
    }
  }

}

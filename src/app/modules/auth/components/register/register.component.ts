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
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userRole!: string;
  img!:File;

  constructor(private fb: FormBuilder, private http: HttpClient, private service: AuthServiceService, private store: Store) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ["", [Validators.required], Validators.minLength(2)],
      email: ["", [Validators.required], Validators.minLength(13)],
      password: ["", [Validators.required, Validators.minLength(8)]],
      conf_password: ["", [Validators.required, Validators.minLength(8)]],
      role: ["",],
      company_logo: [null, [Validators.required]]
    })
  }

  hasErrors = (name: string, type: string) => {
    return this.registerForm.get(name) && this.registerForm.get(name)?.hasError(type) && this.registerForm.get(name)?.touched
  }

  setRole = (e: any) => {
    this.userRole = e.target.value;
    console.log(this.userRole)
  }

  onFileChange = (e: any) => {
    //this.registerForm.get("company_logo")?.setValue(e.target.files[0])
    this.img = e.target.files[0]
  }

  submitForm = async () => {
    const data = this.registerForm.value;
    //
    const userData = new FormData()
    //
    if (!data.company_logo) {
      userData.append("firstname", data.firstname)
      userData.append("email", data.email)
      userData.append("password", data.conf_password)
      userData.append("role", data.role)
    } else {
      userData.append("firstname", data.firstname)
      userData.append("email", data.email)
      userData.append("password", data.conf_password)
      userData.append("role", data.role)
      userData.append("company_logo", this.img)
    }
    console.log(userData.get("company_logo"))
    //
    try {
      this.service.registerRequest(userData).subscribe((user: any) => {
        this.store.dispatch(setUser({ user }))
      })
    } catch (error) {
      console.log(error)
    }
  }

}

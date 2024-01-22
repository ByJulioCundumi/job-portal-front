import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { userStateSelector } from 'src/app/state/userState/user.selector';
import { setUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

  constructor(private store:Store<IState>, private router:Router, private service:AuthServiceService){}

  ngOnInit(): void {
    this.service.verifyAccessRequest().subscribe((user:any)=>{
      this.store.dispatch(setUser({user}))
    })

    this.store.select(userStateSelector).subscribe((user)=>{
      if(user.role === "company"){
        this.router.navigateByUrl("/upload")
      }
      else if(user.role === "user"){
        this.router.navigateByUrl("/")
      }
    })
  }

}

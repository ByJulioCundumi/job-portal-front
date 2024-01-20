import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { IUserDTO } from 'src/app/models/IUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { userStateSelector } from 'src/app/state/userState/user.selector';
import { unsetUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private store:Store<IState>, private service:AuthServiceService){}
  user!:IUserDTO;

  ngOnInit(): void {
    this.store.select(userStateSelector).subscribe((user)=>{
      this.user = user;
    })
  }

  closeSession = ()=>{
    this.service.logoutRequest().subscribe()
    this.store.dispatch(unsetUser())
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { IUserDTO } from 'src/app/models/IUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { userStateSelector } from 'src/app/state/userState/user.selector';
import { unsetUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-upload-navbar',
  templateUrl: './upload-navbar.component.html',
  styleUrls: ['./upload-navbar.component.scss']
})
export class UploadNavbarComponent implements OnInit{
  user!:IUserDTO;
  constructor(private service:AuthServiceService, private store:Store<IState>){}

  ngOnInit(): void {
    this.store.select(userStateSelector).subscribe((user)=>{
      this.user = user;
    })
  }

  closeSession = ()=>{
    this.store.dispatch(setLoading({loading:true})) // start loading
    this.service.logoutRequest().subscribe()
    this.store.dispatch(setLoading({loading:false})) // ends loading
    this.store.dispatch(unsetUser())
  }
}

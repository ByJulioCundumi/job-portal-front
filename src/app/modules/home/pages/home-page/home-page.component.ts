import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { modalSelector } from 'src/app/state/modalState/modal.selector';
import { setUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  modalState!: boolean;

  constructor(private store:Store<IState>, private http:HttpClient, private service: AuthServiceService){}

  ngOnInit(): void {
    this.store.select(modalSelector).subscribe((m)=>{
      this.modalState = m;
    })

    this.store.dispatch(setLoading({loading:true})) // start loading
    this.service.verifyAccessRequest().subscribe((user:any)=>{
      this.store.dispatch(setLoading({loading:false})) // ends loading
      if(user.id){
        this.store.dispatch(setUser({user}))
      }
    })
  }
}

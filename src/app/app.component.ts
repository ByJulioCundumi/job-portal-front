import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './models/IState';
import { loadingStateSelector } from './state/loadingState/loading.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store:Store<IState>){}
  isLoading:boolean = false;

  ngOnInit(): void {
    this.store.select(loadingStateSelector).subscribe((value)=>{
      this.isLoading = value;
    })
  }
}

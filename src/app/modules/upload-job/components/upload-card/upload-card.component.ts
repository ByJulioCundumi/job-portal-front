import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { userStateSelector } from 'src/app/state/userState/user.selector';

@Component({
  selector: 'app-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent implements OnInit{
 @Input() job!:IJob;
 userUrl!: string;

 constructor(private store:Store<IState>, private http:HttpClient){}

 ngOnInit(): void {
  this.store.select(userStateSelector).subscribe((user:any)=>{
    this.userUrl = user.img.url
  })
 }

 deleteJob = (id:number | undefined)=>{
  if(id){
    this.http.delete(`http://localhost:3000/api/job/${id}`).subscribe()
  }
 }
}

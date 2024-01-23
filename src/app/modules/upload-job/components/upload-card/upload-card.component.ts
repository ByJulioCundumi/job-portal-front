import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { JobServiceService } from 'src/app/services/job-service.service';
import { UtilService } from 'src/app/services/util.service';
import { removeJob } from 'src/app/state/jobState/jobActions';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { userStateSelector } from 'src/app/state/userState/user.selector';

@Component({
  selector: 'app-upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.scss']
})
export class UploadCardComponent implements OnInit{
 @Input() job!:IJob;
 userUrl!: string;

 constructor(private store:Store<IState>, private http:HttpClient, private util:UtilService, private service:JobServiceService){}

 ngOnInit(): void {
  this.store.select(userStateSelector).subscribe((user:any)=>{
    this.userUrl = user.img.url
  })
 }

 deleteJob = (id:number | undefined)=>{
  if(id){
    this.store.dispatch(setLoading({loading:true})) // start loading
    this.service.deleteJobRequest(id).subscribe()
    this.store.dispatch(setLoading({loading:false})) // ends loading
    this.store.dispatch(removeJob({id}))
  }
 }

 loadDescription = (text:string)=>{
  return this.util.recortarTexto(text, 10)
}
}

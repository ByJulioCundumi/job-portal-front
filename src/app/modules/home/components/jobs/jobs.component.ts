import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { IUser } from 'src/app/models/IUser';
import { JobServiceService } from 'src/app/services/job-service.service';
import { jobStateSelector } from 'src/app/state/jobState/job.selector';
import { setJobs } from 'src/app/state/jobState/jobActions';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit{
  jobs!: any;
  constructor(private store: Store<IState>, private http: HttpClient, private service: JobServiceService) { }

  ngOnInit(): void {
    this.service.getAllJobsRequest().subscribe((jobs:any)=>{
      this.jobs = jobs
    })
  }
}

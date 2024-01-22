import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAllJob } from 'src/app/models/IAllJobs';
import { IState } from 'src/app/models/IState';
import { setAllJobsFiltered } from 'src/app/state/allJobFiltered/all.jobs.filtered.actions';
import { allJobSelector } from 'src/app/state/allJobState/all.job.select';

@Component({
  selector: 'app-recommended-jobs',
  templateUrl: './recommended-jobs.component.html',
  styleUrls: ['./recommended-jobs.component.scss']
})
export class RecommendedJobsComponent implements OnInit{
  jobs:IAllJob[] = []
  constructor(private store:Store<IState>){}

  ngOnInit(): void {
    this.store.select(allJobSelector).subscribe((jobs)=>{
      this.jobs = jobs
    })
  }

  recommendedJob = (selected:string)=>{

    if(selected === "all"){
      this.store.dispatch(setAllJobsFiltered({jobs: this.jobs}))
    } else{
      const filteredJob = this.jobs.filter((job)=>{
        return job.title.toLowerCase().includes(selected.toLowerCase())
      })
      this.store.dispatch(setAllJobsFiltered({jobs: filteredJob}))
    }
  }
}

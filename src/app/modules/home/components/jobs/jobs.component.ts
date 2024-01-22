import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAllJob } from 'src/app/models/IAllJobs';
import { IState } from 'src/app/models/IState';
import { JobServiceService } from 'src/app/services/job-service.service';
import { setAllJobsFiltered } from 'src/app/state/allJobFiltered/all.jobs.filtered.actions';
import { allJobsFilteredSelector } from 'src/app/state/allJobFiltered/all.jobs.filtered.selector';
import { setAllJob } from 'src/app/state/allJobState/all.job.actions';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit{
  jobs: IAllJob[] = [];
  constructor(private store: Store<IState>, private http: HttpClient, private service: JobServiceService) { }

  ngOnInit(): void {
    this.service.getAllJobsRequest().subscribe((allJobs:any)=>{
      this.store.dispatch(setAllJob({jobs: allJobs}))
      this.store.dispatch(setAllJobsFiltered({jobs: allJobs}))
    })

    this.store.select(allJobsFilteredSelector).subscribe((filtered)=>{
      this.jobs = filtered
    })

  }
}

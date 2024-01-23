import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { JobServiceService } from 'src/app/services/job-service.service';
import { jobStateSelector } from 'src/app/state/jobState/job.selector';
import { setJobs } from 'src/app/state/jobState/jobActions';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { modalSelector } from 'src/app/state/modalState/modal.selector';
import { setModal } from 'src/app/state/modalState/modalActions';
import { setUpdateJob } from 'src/app/state/updateJobState/update.job.actions';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  jobs!: IJob[];
  modalState!:boolean;
  constructor(private store: Store<IState>, private http: HttpClient, private service: JobServiceService) { }

  ngOnInit(): void {
    this.store.dispatch(setLoading({loading:true})) // start loading
    this.service.getJobsRequest().subscribe((jobs: any) => {
      this.store.dispatch(setLoading({loading:false})) // ends loading
      this.store.dispatch(setJobs({ jobs }))
    })

    this.store.select(jobStateSelector).subscribe((jobs)=>{
      this.jobs = jobs
    })

    this.store.select(modalSelector).subscribe((m)=>{
      this.modalState = m;
    })
  }

  changeModalState = (job:any)=>{
    this.store.dispatch(setUpdateJob({job}))
    console.log(job)
    this.store.dispatch(setModal({isOpen: !this.modalState}))
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJobDetail } from 'src/app/models/IJobDetail';
import { IState } from 'src/app/models/IState';
import { jobDetailSelector } from 'src/app/state/jobDetailState/job.detail.selector';
import { modalSelector } from 'src/app/state/modalState/modal.selector';
import { setModal } from 'src/app/state/modalState/modalActions';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit{
  modalState!:boolean;
  jobDetails!:IJobDetail;

  constructor(private store:Store<IState>){}

  ngOnInit(): void {
    this.store.select(modalSelector).subscribe((m)=>{
      this.modalState = m;
    })

    this.store.select(jobDetailSelector).subscribe((job)=>{
      this.jobDetails = job
    })
  }

  changeModalState = ()=>{
    this.store.dispatch(setModal({isOpen: !this.modalState}))
  }
}

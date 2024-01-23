import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { UtilService } from 'src/app/services/util.service';
import { setJobDetail } from 'src/app/state/jobDetailState/job.detail.actions';
import { modalSelector } from 'src/app/state/modalState/modal.selector';
import { setModal } from 'src/app/state/modalState/modalActions';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit{
  modalState!:boolean;
  @Input() job!:any;

  constructor(private store:Store<IState>, private util:UtilService){}

  ngOnInit(): void {
    this.store.select(modalSelector).subscribe((m)=>{
      this.modalState = m;
    })
  }

  changeModalState = ()=>{
    this.store.dispatch(setModal({isOpen: !this.modalState}))
    this.store.dispatch(setJobDetail({job: this.job}))
  }

  loadDescription = (text:string)=>{
    return this.util.recortarTexto(text, 10)
  }

}

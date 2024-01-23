import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IJob } from 'src/app/models/IJob';
import { IState } from 'src/app/models/IState';
import { JobServiceService } from 'src/app/services/job-service.service';
import { addJob, updateJob } from 'src/app/state/jobState/jobActions';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { modalSelector } from 'src/app/state/modalState/modal.selector';
import { setModal } from 'src/app/state/modalState/modalActions';
import { setUpdateJob, unsetUpdateJob } from 'src/app/state/updateJobState/update.job.actions';
import { updateJobStateSelector } from 'src/app/state/updateJobState/update.job.selector';

@Component({
  selector: 'app-edit-uploaded',
  templateUrl: './edit-uploaded.component.html',
  styleUrls: ['./edit-uploaded.component.scss']
})
export class EditUploadedComponent implements OnInit{
  uploadForm!: FormGroup;
  selectedJob!:any;
  modalState!:boolean;

  constructor(private http: HttpClient, private fb: FormBuilder, private service: JobServiceService, private store:Store<IState>) { }

  ngOnInit(): void {
    this.store.select(updateJobStateSelector).subscribe((job)=>{
      this.selectedJob = job
    })

    this.uploadForm = this.fb.group({
      title: [this.selectedJob.title, [Validators.required]],
      location: [this.selectedJob.location, [Validators.required]],
      type: [this.selectedJob.type, [Validators.required]],
      modality: [this.selectedJob.modality, [Validators.required]],
      salary: [this.selectedJob.salary, [Validators.required]],
      experience: [this.selectedJob.experience, [Validators.required]],
      description: [this.selectedJob.description, [Validators.required]]
    })

    this.store.select(modalSelector).subscribe((m)=>{
      this.modalState = m;
    })
  }

  hasErrors = (name: string, type: string) => {
    return this.uploadForm.get(name) && this.uploadForm.get(name)?.hasError(type) && this.uploadForm.get(name)?.touched
  }

  submitForm = () => {
    if (this.uploadForm.valid && this.selectedJob.id) {
      this.store.dispatch(setLoading({loading:true})) // start loading
      this.service.putJobRequest(this.selectedJob.id, this.uploadForm.value).subscribe((job:any)=>{
        this.store.dispatch(setLoading({loading:false})) // ends loading
        this.store.dispatch(updateJob({job}))
        this.store.dispatch(setUpdateJob({job}))
        this.store.dispatch(setModal({isOpen: !this.modalState}))
      })
    }
  }

  changeModalState = ()=>{
    this.store.dispatch(setModal({isOpen: !this.modalState}))
    this.store.dispatch(unsetUpdateJob())
  }
}

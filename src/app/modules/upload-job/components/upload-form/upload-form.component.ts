import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { JobServiceService } from 'src/app/services/job-service.service';
import { addJob } from 'src/app/state/jobState/jobActions';
import { setLoading } from 'src/app/state/loadingState/loadingActions';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  uploadForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private service: JobServiceService, private store:Store<IState>) { }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      title: ["", [Validators.required]],
      location: ["", [Validators.required]],
      type: ["", [Validators.required]],
      modality: ["", [Validators.required]],
      salary: ["", [Validators.required]],
      experience: ["", [Validators.required]],
      description: ["", [Validators.required]]
    })
  }

  hasErrors = (name: string, type: string) => {
    return this.uploadForm.get(name) && this.uploadForm.get(name)?.hasError(type) && this.uploadForm.get(name)?.touched
  }

  submitForm = () => {
    if (this.uploadForm.valid) {
      this.store.dispatch(setLoading({loading:true})) // start loading
      this.service.postJobRequest(this.uploadForm.value).subscribe((job:any)=>{
        this.store.dispatch(setLoading({loading:false})) // ends loading
        this.store.dispatch(addJob({job}))
      })
    }
  }
}

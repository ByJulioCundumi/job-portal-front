import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  uploadForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private service: JobServiceService) { }

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
      this.service.postJobRequest(this.uploadForm.value).subscribe((job:any)=>{
        console.log(job)
      })
    }
  }
}

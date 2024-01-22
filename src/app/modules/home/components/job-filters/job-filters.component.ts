import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAllJob } from 'src/app/models/IAllJobs';
import { IState } from 'src/app/models/IState';
import { setAllJobsFiltered } from 'src/app/state/allJobFiltered/all.jobs.filtered.actions';
import { allJobSelector } from 'src/app/state/allJobState/all.job.select';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.scss']
})
export class JobFiltersComponent implements OnInit {
  job_type: string = "all";
  modality: string = "all";
  experience: string = "all";
  jobs!: IAllJob[];

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(allJobSelector).subscribe((jobs) => {
      this.jobs = jobs
    })
  }

  onInputChange = () => {
    if ((this.job_type != "all") && this.modality === "all" && this.experience === "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.type.toLowerCase().includes(this.job_type.toLowerCase())
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if ((this.job_type != "all") && this.modality != "all" && this.experience === "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.type.toLowerCase().includes(this.job_type.toLowerCase()) && job.modality.toLowerCase().includes(this.modality.toLowerCase())
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if ((this.job_type === "all") && this.modality != "all" && this.experience === "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.modality.toLowerCase().includes(this.modality.toLowerCase());
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if ((this.job_type === "all") && this.modality != "all" && this.experience != "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.modality.toLowerCase().includes(this.modality.toLowerCase()) && parseInt(this.experience) > 3 ? job.experience <= parseInt(this.experience) : job.experience > parseInt(this.experience);
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if ((this.job_type === "all") && this.modality === "all" && this.experience != "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.experience == parseInt(this.experience);
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if ((this.job_type != "all") && this.modality === "all" && this.experience != "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.type.toLowerCase().includes(this.job_type.toLowerCase()) && parseInt(this.experience) > 3 ? job.experience <= parseInt(this.experience) : job.experience > parseInt(this.experience);
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if (this.job_type != "all" && this.modality != "all" && this.experience != "all") {
      const filteredJobs = this.jobs.filter((job)=>{
        return job.type.toLowerCase().includes(this.job_type.toLowerCase()) && job.modality.toLowerCase().includes(this.modality.toLowerCase()) && parseInt(this.experience) > 3 ? job.experience <= parseInt(this.experience) : job.experience > parseInt(this.experience);
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if (this.job_type === "all" && this.modality === "all" && this.experience === "all") {
      this.store.dispatch(setAllJobsFiltered({ jobs: this.jobs }))
    }
  }
}

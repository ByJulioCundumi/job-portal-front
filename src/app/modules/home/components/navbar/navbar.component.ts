import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAllJob } from 'src/app/models/IAllJobs';
import { IState } from 'src/app/models/IState';
import { IUserDTO } from 'src/app/models/IUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { setAllJobsFiltered } from 'src/app/state/allJobFiltered/all.jobs.filtered.actions';
import { allJobSelector } from 'src/app/state/allJobState/all.job.select';
import { setLoading } from 'src/app/state/loadingState/loadingActions';
import { userStateSelector } from 'src/app/state/userState/user.selector';
import { unsetUser } from 'src/app/state/userState/userActions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private store:Store<IState>, private service:AuthServiceService, private router:Router){}
  user!:IUserDTO;
  jobs!:IAllJob[];
  job!:string;
  country!:string;

  ngOnInit(): void {
    this.store.select(userStateSelector).subscribe((user)=>{
      this.user = user;
    })

    this.store.select(allJobSelector).subscribe((jobs:any)=>{
      this.jobs = jobs
    })
  }

  closeSession = ()=>{
    this.store.dispatch(setLoading({loading:true})) // start loading
    this.service.logoutRequest().subscribe()
    this.store.dispatch(setLoading({loading:false})) // ends loading
    this.store.dispatch(unsetUser())
  }

  filterJobs = ()=>{
    if(this.job && !this.country){
      const filteredJobs = this.jobs.filter((job)=>{
        return job.title.toLowerCase().includes(this.job.toLowerCase());
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if(this.country && !this.job){
      const filteredJobs = this.jobs.filter((job)=>{
        return job.location.toLowerCase().includes(this.country.toLowerCase());
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if(this.country && this.job){
      const filteredJobs = this.jobs.filter((job)=>{
        return job.title.toLowerCase().includes(this.job.toLowerCase())  && job.location.toLowerCase().includes(this.country.toLowerCase());
      })
      this.store.dispatch(setAllJobsFiltered({jobs:filteredJobs}))
    }

    else if(!this.country && !this.job){
      this.store.dispatch(setAllJobsFiltered({jobs:this.jobs}))
    }
  }

}


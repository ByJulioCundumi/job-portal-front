import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecommendedJobsComponent } from './components/recommended-jobs/recommended-jobs.component';
import { JobFiltersComponent } from './components/job-filters/job-filters.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobCardComponent } from './components/job-card/job-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    RecommendedJobsComponent,
    JobFiltersComponent,
    JobsComponent,
    JobCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadJobRoutingModule } from './upload-job-routing.module';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { UploadNavbarComponent } from './components/upload-navbar/upload-navbar.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadCardComponent } from './components/upload-card/upload-card.component';


@NgModule({
  declarations: [
    UploadPageComponent,
    UploadNavbarComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadCardComponent
  ],
  imports: [
    CommonModule,
    UploadJobRoutingModule
  ]
})
export class UploadJobModule { }

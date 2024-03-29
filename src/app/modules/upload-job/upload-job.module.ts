import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadJobRoutingModule } from './upload-job-routing.module';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { UploadNavbarComponent } from './components/upload-navbar/upload-navbar.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadCardComponent } from './components/upload-card/upload-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUploadedComponent } from './components/edit-uploaded/edit-uploaded.component';


@NgModule({
  declarations: [
    UploadPageComponent,
    UploadNavbarComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadCardComponent,
    EditUploadedComponent
  ],
  imports: [
    CommonModule,
    UploadJobRoutingModule,
    ReactiveFormsModule
  ]
})
export class UploadJobModule { }

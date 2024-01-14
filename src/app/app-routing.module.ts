import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRequiredGuard } from './guards/auth-required.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("./modules/home/home.module").then((m)=>m.HomeModule)
  },
  {
    path: "upload",
    loadChildren: ()=> import("./modules/upload-job/upload-job.module").then((m)=>m.UploadJobModule),
    canActivate: [authRequiredGuard]
  },
  {
    path: "auth",
    loadChildren: ()=> import("./modules/auth/auth.module").then((m)=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

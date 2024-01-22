import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private http:HttpClient) { }

  getJobRequest = (id:number)=>{
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.get<Observable<any>>(`http://localhost:3000/api/job/${id}`, options)
  }

  getJobsRequest = ()=>{
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.get<Observable<any>>(`http://localhost:3000/api/job`, options)
  }

  getAllJobsRequest = ()=>{
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.get<Observable<any>>(`http://localhost:3000/api/all-job`, options)
  }

  postJobRequest = (body:any)=>{
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.post<Observable<any>>(`http://localhost:3000/api/job`, body, options)
  }

  putJobRequest = (id:number, body:any)=>{
    const options = {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      withCredentials: true
    }
    return this.http.put<Observable<any>>(`http://localhost:3000/api/job/${id}`, body, options)
  }

  deleteJobRequest = (id:number)=>{
    const options = {
      withCredentials: true
    }
    return this.http.delete<Observable<any>>(`http://localhost:3000/api/job/${id}`, options)
  }
}

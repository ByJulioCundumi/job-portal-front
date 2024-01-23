import { createReducer, on } from "@ngrx/store";
import { addJob, removeJob, setJobs, updateJob } from "./jobActions";
import { IJobs } from "src/app/models/IJob";

const initialState:IJobs = {
  jobs: []
}

export const jobReducer = createReducer(
  initialState,
  on(setJobs, (state, {jobs})=>{
    return {
      ...state,
      jobs: [...jobs]
    }
  }),

  on(addJob, (state, {job})=>{
    return {
      ...state,
      jobs: [...state.jobs, job]
    }
  }),

  on(updateJob, (state, {job})=>{
    const newJobs = state.jobs.filter((found)=>{
      return found.id != job.id
    })

    return {
      ...state,
      jobs: [...newJobs, job]
    }
  }),

  on(removeJob, (state, {id})=>{
    const newJobs = state.jobs.filter((job)=>{return job.id != id})
    return {
      ...state,
      jobs: [...newJobs]
    }
  })
)

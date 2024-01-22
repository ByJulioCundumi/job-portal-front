import { createReducer, on } from "@ngrx/store";
import { IAllJobs } from "src/app/models/IAllJobs";
import { setAllJob } from './all.job.actions';

const initialState : IAllJobs = {
  jobs: []
}

export const allJobReducer = createReducer(
  initialState,
  on(setAllJob, (state, {jobs})=>{
    return {
      ...state,
      jobs: [...jobs]
    }
  })
)

import { createReducer, on } from "@ngrx/store";
import { IAllJobs } from "src/app/models/IAllJobs";
import { setAllJobsFiltered } from "./all.jobs.filtered.actions";

const initialState : IAllJobs = {
  jobs: []
}

export const allJobsFilteredReducer = createReducer(
  initialState,
  on(setAllJobsFiltered, (state, {jobs})=>{
    return {
      ...state,
      jobs: [...jobs]
    }
  })
)

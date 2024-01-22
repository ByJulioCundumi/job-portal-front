import { createSelector } from "@ngrx/store";
import { IAllJobs } from "src/app/models/IAllJobs";
import { IState } from "src/app/models/IState";

const selectAllJobsFilteredState = (state:IState)=>state.allJobsFilteredState

export const allJobsFilteredSelector = createSelector(
  selectAllJobsFilteredState,
  (state:IAllJobs)=> state.jobs
)

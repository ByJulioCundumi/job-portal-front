import { createSelector } from "@ngrx/store";
import { IAllJobs } from "src/app/models/IAllJobs";
import { IState } from "src/app/models/IState";

const selectAllJobState = (state:IState)=>state.allJobState

export const allJobSelector = createSelector(
  selectAllJobState,
  (state:IAllJobs)=> state.jobs
)

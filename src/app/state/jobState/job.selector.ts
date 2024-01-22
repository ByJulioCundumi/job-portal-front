import { createSelector } from "@ngrx/store";
import { IJobs } from "src/app/models/IJob";
import { IState } from "src/app/models/IState";

const selectJobState = (state:IState)=>state.jobState

export const jobStateSelector = createSelector(
  selectJobState,
  (state:IJobs)=> state.jobs
)

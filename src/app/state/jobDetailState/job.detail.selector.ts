import { createSelector } from "@ngrx/store";
import { IJobDetail } from "src/app/models/IJobDetail";
import { IState } from "src/app/models/IState";

const selectJobDetail = (state:IState)=> state.jobDetailState

export const jobDetailSelector = createSelector(
  selectJobDetail,
  (state: IJobDetail)=> state
)

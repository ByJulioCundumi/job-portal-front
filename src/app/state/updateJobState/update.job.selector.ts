import { createSelector } from "@ngrx/store"
import { IState } from "src/app/models/IState"
import { IUpdateJob } from "src/app/models/IUpdateJob"

const selectUpdateJobState = (state:IState)=>state.updateJobState

export const updateJobStateSelector = createSelector(
  selectUpdateJobState,
  (state:IUpdateJob)=> state
)

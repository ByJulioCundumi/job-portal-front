import { createReducer, on } from "@ngrx/store";
import { IJobs } from "src/app/models/IJob";
import { setJobs } from "./jobActions";

const initialState:IJobs = {
  jobs: []
}

export const jobReducer = createReducer(
  initialState,
  on(setJobs, (state, {jobsArr})=>{
    return {
      ...state,
      jobs: [...jobsArr.jobs]
    }
  })
)

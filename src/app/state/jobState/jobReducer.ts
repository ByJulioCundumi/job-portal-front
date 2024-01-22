import { createReducer, on } from "@ngrx/store";
import { setJobs } from "./jobActions";
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
  })
)

import { ActionReducerMap } from "@ngrx/store";
import { jobReducer } from "./jobState/jobReducer";
import { loadingReducer } from "./loadingState/loadingReducer";
import { modalReducer } from "./modalState/modalReducer";
import { userReducer } from "./userState/userReducer";
import { IState } from "../models/IState";
import { allJobReducer } from "./allJobState/all.job.reducer";
import { jobDetailReducer } from "./jobDetailState/job.detail.reducer";
import { allJobsFilteredReducer } from "./allJobFiltered/all.jobs.filtered.reducer";

export const ROOT__REDUCERS: ActionReducerMap<IState> = {
  userState: userReducer,
  modalState: modalReducer,
  loadingState: loadingReducer,
  jobState: jobReducer,
  allJobState: allJobReducer,
  jobDetailState: jobDetailReducer,
  allJobsFilteredState: allJobsFilteredReducer
}

import { ActionReducerMap } from "@ngrx/store";
import { jobReducer } from "./jobState/jobReducer";
import { loadingReducer } from "./loadingState/loadingReducer";
import { modalReducer } from "./modalState/modalReducer";
import { userReducer } from "./userState/userReducer";
import { IState } from "../models/IState";

export const ROOT__REDUCERS: ActionReducerMap<IState> = {
  userState: userReducer,
  modalState: modalReducer,
  loadingState: loadingReducer,
  jobState: jobReducer
}

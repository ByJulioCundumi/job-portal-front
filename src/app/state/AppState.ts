import { jobReducer } from "./jobState/jobReducer";
import { loadingReducer } from "./loadingState/loadingReducer";
import { modalReducer } from "./modalState/modalReducer";
import { userReducer } from "./userState/userReducer";

export const ROOT__REDUCERS = {
  userState: userReducer,
  modalState: modalReducer,
  loadingState: loadingReducer,
  jobState: jobReducer
}

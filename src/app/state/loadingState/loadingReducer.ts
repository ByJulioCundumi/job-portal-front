import { createReducer, on } from "@ngrx/store";
import { ILoading } from "src/app/models/ILoading";
import { setLoading } from "./loadingActions";

const initialState:ILoading = {
  isLoading: false
}

export const loadingReducer = createReducer(
  initialState,
  on(setLoading, (state, {loading})=>{
    return {
      ...state,
      isLoading: loading
    }
  })
)

import { IState } from "src/app/models/IState";
import { loadingReducer } from './loadingReducer';
import { createSelector } from "@ngrx/store";
import { ILoading } from "src/app/models/ILoading";

const selectLoadingState = (state:IState) => state.loadingState;

export const loadingStateSelector = createSelector(
  selectLoadingState,
  (state:ILoading) => state.isLoading
)

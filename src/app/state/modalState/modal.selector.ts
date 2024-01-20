import { createSelector } from "@ngrx/store";
import { IModal } from "src/app/models/IModal";
import { IState } from "src/app/models/IState";

const selectModalState = (state:IState)=>state.modalState;

export const modalSelector = createSelector(
  selectModalState,
  (state:IModal)=> state.isOpen
)

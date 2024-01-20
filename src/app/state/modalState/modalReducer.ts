import { createReducer, on } from "@ngrx/store";
import { IModal } from "src/app/models/IModal";
import { setModal } from "./modalActions";

const initialState: IModal = {
  isOpen: false
}

export const modalReducer = createReducer(
  initialState,
  on(setModal, (state, {isOpen})=>{
    return {
      ...state,
      isOpen
    }
  })
)

import { createAction, props } from "@ngrx/store";
import { IModal } from "src/app/models/IModal";

export const setModal = createAction(
  "[home page] setModal",
  props<{modal:IModal}>()
)

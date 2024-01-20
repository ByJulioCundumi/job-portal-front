import { createAction, props } from "@ngrx/store";
import { ILoading } from "src/app/models/ILoading";

export const setLoading = createAction(
  "[page] set loading",
  props<{loading:boolean}>()
)

import { createAction, props } from "@ngrx/store";
import { IJobDetail } from "src/app/models/IJobDetail";

export const setJobDetail = createAction(
  "[Home page], set job details",
  props<{job:IJobDetail}>()
)

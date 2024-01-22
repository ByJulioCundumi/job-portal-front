import { createAction, props } from "@ngrx/store";
import { IJob, IJobs } from "src/app/models/IJob";

export const setJobs = createAction(
  "[home page] set jobs",
  props<{jobs:IJob[]}>()
)

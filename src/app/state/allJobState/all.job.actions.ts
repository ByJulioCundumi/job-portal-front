import { createAction, props } from "@ngrx/store";
import { IAllJob, IAllJobs } from "src/app/models/IAllJobs";

export const setAllJob = createAction(
  "[home page] set all jobs",
  props<{jobs:IAllJob[]}>()
)

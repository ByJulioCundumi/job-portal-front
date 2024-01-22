import { createAction, props } from "@ngrx/store";
import { IAllJob, IAllJobs } from "src/app/models/IAllJobs";

export const setAllJobsFiltered = createAction(
  "[home page] set all jobs filtered",
  props<{jobs:IAllJob[]}>()
)

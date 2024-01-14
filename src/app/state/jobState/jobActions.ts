import { createAction, props } from "@ngrx/store";
import { IJobs } from "src/app/models/IJob";

export const setJobs = createAction(
  "[home page] set jobs",
  props<{jobsArr:IJobs}>()
)

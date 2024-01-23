import { createAction, props } from "@ngrx/store";
import { IJob, IJobs } from "src/app/models/IJob";

export const setJobs = createAction(
  "[home page] set jobs",
  props<{jobs:IJob[]}>()
)

export const addJob = createAction(
  "[upload page] add new job",
  props<{job:IJob}>()
)

export const removeJob = createAction(
  "[upload page] remove a job",
  props<{id:number}>()
)

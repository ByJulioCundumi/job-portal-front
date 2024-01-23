import { createAction, props } from "@ngrx/store";
import { IJob } from "src/app/models/IJob";
import { IUpdateJob } from "src/app/models/IUpdateJob";

export const setUpdateJob = createAction(
  "[upload page] set job to update",
  props<{job:IUpdateJob}>()
)

export const unsetUpdateJob = createAction(
  "[upload page] unset job to update"
)

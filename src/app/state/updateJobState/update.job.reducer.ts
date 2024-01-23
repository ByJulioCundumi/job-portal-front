import { createReducer, on } from "@ngrx/store"
import { setUpdateJob, unsetUpdateJob } from "./update.job.actions"
import { IUpdateJob } from "src/app/models/IUpdateJob"

const initialState: IUpdateJob = {
  id: 0,
  title: "",
  location: "",
  type: "",
  modality: "",
  salary: 0,
  experience: 0,
  description: "",
  createdAt: ""
}

export const updateJobReducer = createReducer(
  initialState,
  on(setUpdateJob, (state, { job }) => {
    return {
      ...state,
      id: job.id,
      title: job.title,
      location: job.location,
      type: job.type,
      modality: job.modality,
      salary: job.salary,
      experience: job.experience,
      description: job.description,
      createdAt: job.createdAt
    }
  }),

  on(unsetUpdateJob, (state) => {
    return {
      ...state,
      id: 0,
      title: "",
      location: "",
      type: "",
      modality: "",
      salary: 0,
      experience: 0,
      description: "",
      createdAt: ""
    }
  })
)

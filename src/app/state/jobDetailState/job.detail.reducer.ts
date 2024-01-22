import { createReducer, on } from "@ngrx/store";
import { IJobDetail } from "src/app/models/IJobDetail";
import { setJobDetail } from "./job.detail.actions";

const initialState: IJobDetail = {
  id: 0,
  title: "",
  location: "",
  type: "",
  modality: "",
  salary: 0,
  experience: 0,
  description: "",
  createdAt: new Date().toISOString(),
  user: {
    id: 0,
    img: {url: "", id:""},
    firstname: "",
    email: "",
    password: "",
    role: "",
  }
}

export const jobDetailReducer = createReducer(
  initialState,
  on(setJobDetail, (state, { job }) => {
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
      createdAt: job.createdAt,
      user: {...job.user}
    }
  })
)

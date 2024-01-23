import { IJob } from "./IJob"

export interface IUpdateJob extends Omit<IJob, "id">{
  id:number
}

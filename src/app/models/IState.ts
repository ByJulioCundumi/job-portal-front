import { IAllJobs } from "./IAllJobs";
import {  IJobs } from "./IJob";
import { IJobDetail } from "./IJobDetail";
import { ILoading } from "./ILoading";
import { IModal } from "./IModal";
import { IUpdateJob } from "./IUpdateJob";
import { IUserDTO } from "./IUser";

export interface IState{
  userState: IUserDTO,
  loadingState: ILoading,
  modalState: IModal,
  jobState: IJobs,
  allJobState:IAllJobs,
  allJobsFilteredState:IAllJobs,
  jobDetailState: IJobDetail,
  updateJobState: IUpdateJob
}

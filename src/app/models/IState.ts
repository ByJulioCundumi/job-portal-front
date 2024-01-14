import { IJobs } from "./IJob";
import { ILoading } from "./ILoading";
import { IModal } from "./IModal";
import { IUserDTO } from "./IUser";

export interface IState{
  userState: IUserDTO,
  loadingState: ILoading,
  ModalState: IModal,
  jobState: IJobs
}

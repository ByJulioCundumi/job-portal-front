import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { IState } from "src/app/models/IState";
import { IUser, IUserDTO } from "src/app/models/IUser";

const selectUserState = (state:IState)=> state.userState

export const userStateSelector = createSelector(
  selectUserState,
  (state:IUserDTO)=> state
)


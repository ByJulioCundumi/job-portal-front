import { createAction, props } from "@ngrx/store";
import { IUserDTO } from "src/app/models/IUser";

export const setUser = createAction(
  "[auth page] set user",
  props<{user:IUserDTO}>()
)

export const unsetUser = createAction(
  "[auth page] unset user"
)

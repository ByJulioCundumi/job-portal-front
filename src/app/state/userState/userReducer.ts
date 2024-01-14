import { createReducer, on } from "@ngrx/store";
import { IUserDTO } from "src/app/models/IUser";
import { setUser, unsetUser } from "./userActions";

const initialState: IUserDTO = {
  id: 0,
  firstname: "",
  email: "",
  role: ""
}

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, {user})=>{
    return {
      ...state,
      id:user.id,
      firstname: user.firstname,
      email: user.email,
      role: user.role
    }
  }),

  on(unsetUser, (state)=>{
    return {
      ...state,
      id:0,
      firstname: "",
      email: "",
      role: ""
    }
  })
)

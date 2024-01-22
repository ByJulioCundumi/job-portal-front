import { createReducer, on } from "@ngrx/store";
import { IUserDTO } from "src/app/models/IUser";
import { setUser, unsetUser } from "./userActions";

const initialState: IUserDTO = {
  id: 0,
  img: {
    url: "",
    id: ""
  },
  firstname: "",
  email: "",
  role: ""
}

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => {
    if(user.img?.url){
      return {
        ...state,
        id: user.id,
        img: {url: user.img.url, id: user.img.id},
        firstname: user.firstname,
        email: user.email,
        role: user.role
      }
    } else {
      return {
        ...state,
        id: user.id,
        firstname: user.firstname,
        email: user.email,
        role: user.role
      }
    }

  }),

  on(unsetUser, (state) => {
    return {
      ...state,
      id: 0,
      img: {
        url: "",
        id: ""
      },
      firstname: "",
      email: "",
      role: ""
    }
  })
)

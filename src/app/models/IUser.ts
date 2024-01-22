export interface IUser {
  id: number,
  img?: {
    url: string,
    id: string
  },
  firstname: string,
  email: string,
  password: string,
  role: string
}

export interface IUserDTO extends Omit<IUser, "password"> { }
export interface IUserLogin extends Omit<IUser, "id" | "firstname" | "role"> { }
export interface IUserRegister extends Omit<IUser, "id"> { }

export interface IUser{
  id:number,
  firstname:string,
  email:string,
  password:string,
  role:string
}

export interface IUserDTO extends Omit<IUser, "password">{}

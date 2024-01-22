export interface IJob{
  id?:number,
  title:string,
  location:string,
  type:string,
  modality:string,
  salary:number,
  experience:number,
  description:string,
  createdAt:string
}

export interface IJobs{
  jobs: IJob[];
}

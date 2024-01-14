export interface IJob{
  title:string,
  location:string,
  type:string,
  modality:string,
  salary:number,
  experience:number,
  description:string,
  createdAt:Date
}

export interface IJobs{
  jobs: IJob[]
}

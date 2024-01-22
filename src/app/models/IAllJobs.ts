export interface IAllJob{
  id: number,
  title: string,
  location: string,
  type: string,
  modality: string,
  salary: number,
  experience: number,
  description: string,
  createdAt: string,
  user: {
    id: number,
    img: { url: string, id: string },
    firstname: string,
    email: string,
    password: string,
    role: string
  }
}

export interface IAllJobs {
  jobs: IAllJob[]
}

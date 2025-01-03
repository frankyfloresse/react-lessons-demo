export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface IUserReq  {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: Support;
}
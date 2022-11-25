import { IRegistredUser } from './IInputData';
export interface IUser {
  id: string | null;
  isAuthorized: boolean;
  name: string | null;
  login: string | null;
  users: IRegistredUser[] | null;
}

export interface IAuthorizedUser {
  token: string;
  statusCode?: number;
  message?: string;
}

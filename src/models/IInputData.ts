export interface IRegistrationData {
  name: string;
  login: string;
  password: string;
}

export interface IRegistredUser {
  name: string;
  login: string;
  _id: string;
  statusCode?: number;
  message?: string;
}

export type TAllRegistredUser = IRegistredUser[];

export interface ILogInData {
  login: string;
  password: string;
}

export interface ICreateBoardData {
  title: string;
  descriptionInput: string;
}

export interface ICreateCardData {
  title: string;
  description: string;
  priority: string;
}

export interface ICreateColumn {
  title: string;
}

export interface IColumnTitle {
  title: string;
}

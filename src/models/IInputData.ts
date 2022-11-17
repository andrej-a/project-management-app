export interface IRegistrationData {
  name: string;
  login: string;
  password: string;
}

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

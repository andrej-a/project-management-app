import { IUser } from '../../models/IUser';

export const initialState: IUser = {
  id: localStorage.getItem('TASKBAN_USER_ID') || '',
  isAuthorized: false,
  name: localStorage.getItem('TASKBAN_USER_NAME') || '',
  login: localStorage.getItem('TASKBAN_USER_LOGIN') || '',
};

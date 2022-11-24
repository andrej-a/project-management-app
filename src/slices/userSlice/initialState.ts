import { IUser } from '../../models/IUser';
import { getCookie } from '../../utils/cookie/getCookie';

export const initialState: IUser = {
  id: localStorage.getItem('TASKBAN_USER_ID') || '',
  isAuthorized: getCookie('TASKBAN_USER_TOKEN') ? true : false,
  name: localStorage.getItem('TASKBAN_USER_NAME') || '',
  login: localStorage.getItem('TASKBAN_USER_LOGIN') || '',
};

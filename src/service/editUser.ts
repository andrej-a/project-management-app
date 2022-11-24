/* STORE */
import { store } from '../store/store';
import { setLoadingState } from '../slices/modalsSlice/modalsSlice';
import { authorizationSwitch } from '../slices/userSlice/userSlice';
/* MODELS */
import { IRegistrationData, IRegistredUser } from '../models/IInputData';
import { requests } from '../models/requests';
/* UTILS */
import { showWarningMessage } from '../utils/showWarningMessage';
import { getCookie } from '../utils/cookie/getCookie';
/* SERVICES */
import { loginUser } from './loginUser';

export const editUser = async (userID: string, data: IRegistrationData) => {
  const { dispatch } = store;
  dispatch(setLoadingState('loading'));
  const { TYPE, PUT, MAIN_ROUTE, UPDATE_USER, SUCCESSFULL_REQUEST } = requests;
  const request = await fetch(`${MAIN_ROUTE}${UPDATE_USER}/${userID}`, {
    method: `${PUT}`,
    headers: {
      Accept: `${TYPE}`,
      'Content-Type': `${TYPE}`,
      Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
    },
    body: JSON.stringify(data),
  });

  const responce: IRegistredUser = await request.json();

  if (request.status !== SUCCESSFULL_REQUEST) {
    showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
  } else {
    loginUser({ login: responce.login, password: data.password });
    dispatch(authorizationSwitch());
  }
  dispatch(setLoadingState('loaded'));
};

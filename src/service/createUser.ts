/* MODELS */
import { IRegistrationData, IRegistredUser } from '../models/IInputData';
import { path, requests } from '../models/requests';
/* STORE */
import { store } from '../store/store';
import { setLoadingState } from '../slices/modalsSlice/modalsSlice';
/* UTILS */
import { showWarningMessage } from '../utils/showWarningMessage';
import { loginUser } from './loginUser';

export const createUser = async (data: IRegistrationData): Promise<IRegistredUser> => {
  const { dispatch } = store;
  const { TYPE, SUCCESSFULL_REQUEST, POST } = requests;
  dispatch(setLoadingState('loading'));
  const request = await fetch(`${path.signup}`, {
    method: `${POST}`,
    headers: {
      Accept: `${TYPE}`,
      'Content-Type': `${TYPE}`,
    },
    body: JSON.stringify(data),
  });

  const responce: IRegistredUser = await request.json();

  if (request.status !== SUCCESSFULL_REQUEST) {
    showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
    dispatch(setLoadingState('loaded'));
  } else {
    loginUser({ login: responce.login, password: data.password });
  }
  return responce;
};

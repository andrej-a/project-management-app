/* MODELS */
import { IRegistrationData, IRegistredUser } from '../models/IInputData';
import { path, requests } from '../models/requests';
/* STORE */
import { store } from '../store/store';
import { setLoadingState, setStatus } from '../slices/modalsSlice/modalsSlice';
/* UTILS */
import { showWarningMessage } from '../utils/showWarningMessage';

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
  } else {
    dispatch(setStatus('login'));
  }
  dispatch(setLoadingState('loaded'));
  return responce;
};

/* MODELS */
import { IRegistrationData, IRegistredUser } from '../models/IInputData';
import { requests } from '../models/requests';
/* STORE */
import { store } from '../store/store';
import { setLoadingState } from '../slices/modalsSlice/modalsSlice';
/* UTILS */
import { showWarningMessage } from '../utils/showWarningMessage';

export const createUser = async (data: IRegistrationData): Promise<IRegistredUser> => {
  const { dispatch } = store;
  const { TYPE, SUCCESSFULL_REQUEST, POST, MAIN_ROUTE, SIGN_UP } = requests;
  dispatch(setLoadingState('loading'));
  const request = await fetch(`${MAIN_ROUTE}${SIGN_UP}`, {
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
  }
  dispatch(setLoadingState('loaded'));
  return responce;
};

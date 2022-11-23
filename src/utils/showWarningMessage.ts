/* STORE */
import { store } from '../store/store';
import { setWarningMessage } from '../slices/modalsSlice/modalsSlice';
/* MODELS */
import { requests } from '../models/requests';

export const showWarningMessage = (message: string) => {
  const { dispatch } = store;
  const { WARNING_MESSAGE_DURATION } = requests;

  dispatch(setWarningMessage(message));
  setTimeout(() => {
    dispatch(setWarningMessage(''));
  }, WARNING_MESSAGE_DURATION);
};

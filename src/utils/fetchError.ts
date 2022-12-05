import { setStatus, setWarningMessage } from '../slices/modalsSlice/modalsSlice';
import { store } from '../store/store';

export const showWarningModalMessage = (message: string) => {
  const { dispatch } = store;
  dispatch(setStatus('fetch_error'));
  dispatch(setWarningMessage(message));
  setTimeout(() => {
    dispatch(setStatus('hidden'));
    dispatch(setWarningMessage(''));
  }, 3000);
};

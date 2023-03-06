/* MODELS */
import { ModalsState } from '../../models/modals';

export const initialState: ModalsState = {
  modalsState: 'hidden',
  warningMessage: '',
  loadingState: 'loaded',
  deletingValue: '',
  requestURL: '',
  inputType: 'password',
};

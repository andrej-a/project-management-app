export type ModalsState = {
  modalsState:
    | 'hidden'
    | 'new_card'
    | 'new_board'
    | 'add_column'
    | 'registration'
    | 'login'
    | 'delete_item'
    | 'update_card'
    | 'update_board'
    | 'view_card';
  warningMessage: string;
  loadingState: 'loaded' | 'loading';
  deletingValue: string;
  requestURL: string;
  inputType: 'password' | 'text';
};

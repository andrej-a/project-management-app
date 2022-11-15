export interface ILanguage {
  deleteItemModal: {
    title: string;
    confirmButton: string;
  };
  registrationModal: {
    title: string;
    namePlaceholder: string;
    loginPlaceholder: string;
    passwordPlaceholder: string;
    registrationButton: string;
    changeModalToSignIn: string;
  };
  loginModal: {
    title: string;
    loginPlaceholder: string;
    passwordPlaceholder: string;
    logInButton: string;
    changeModalToSignUp: string;
  };
  cancel: string;
  Hello: string;
  'You have': string;
  'Boards (0)': string;
  'Boards (1)': string;
  'Boards (2-4)': string;
  'Boards (5+)': string;
  'To do': string;
  'Keep up the good work!': string;
}

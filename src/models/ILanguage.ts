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
  createBoard: {
    title: string;
    hint: string;
    description: string;
    createButton: string;
  };
  createCard: {
    title: string;
    hint: string;
    description: string;
    titlePriority: string;
    priority: {
      high: string;
      medium: string;
      low: string;
    };
    addTaskButon: string;
  };
  createColumn: {
    title: string;
    hint: string;
    addColumnButton: string;
  };
  cancel: string;
  boardsPage: {
    Hello: string;
    'You have': string;
    'Boards (0)': string;
    'Boards (1)': string;
    'Boards (2-4)': string;
    'Boards (5+)': string;
    'To do': string;
    'Keep up the good work!': string;
    Create: string;
    'new Board': string;
  };
}

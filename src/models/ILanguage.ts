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
    assign: string;
  };
  updateCard: {
    title: string;
    addTaskButon: string;
  };
  updateBoard: {
    title: string;
    createButton: string;
  };
  createColumn: {
    title: string;
    hint: string;
    addColumnButton: string;
  };
  editProfile: {
    title: string;
    namePlaceholder: string;
    loginPlaceholder: string;
    passwordPlaceholder: string;
    changeButton: string;
  };
  noResultPage: {
    title: string;
    backButton: string;
  };
  deleteAccount: string;
  successDeleteValueMessage: string;
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
    'New Board': string;
  };
  mainPage: {
    title: string;
    description: string;
  };
  header: {
    LogOut: string;
    SignIn: string;
    SignUp: string;
    Theme: string;
    ThemeDefault: string;
    ThemeDark: string;
    EN: string;
    RU: string;
    SearchNothing: string;
    SearchBoard: string;
    Search: string;
  };
  profile: {
    DeleteProfile: string;
    ChangePassword: string;
    ChangeLogin: string;
    EditProfile: string;
  };
  currentBoardPage: {
    'See all Boards': string;
    'New column': string;
  };
  view_card: {
    assign: string;
    owner: string;
  };
}

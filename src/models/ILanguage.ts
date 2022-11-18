export interface ILanguage {
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
}

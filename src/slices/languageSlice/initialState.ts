/* MODELS */
import { ILanguage } from '../../models/ILanguage';

export const EnglishState: ILanguage = {
  deleteItemModal: {
    title: 'Delete',
    confirmButton: 'Confirm',
  },
  registrationModal: {
    title: 'Registration',
    namePlaceholder: 'Your name',
    loginPlaceholder: 'Your login',
    passwordPlaceholder: 'Your password',
    registrationButton: 'Registration',
    changeModalToSignIn: 'You already have account? Log In',
  },
  loginModal: {
    title: 'Authorization',
    loginPlaceholder: 'Your login',
    passwordPlaceholder: 'Your password',
    logInButton: 'Log In',
    changeModalToSignUp: 'Don`t have an account? Sign up',
  },
  createBoard: {
    title: 'New Board',
    hint: 'Title',
    description: 'Description',
    createButton: 'Create board',
  },
  createCard: {
    title: 'New Card',
    hint: 'Title',
    description: 'Description',
    titlePriority: 'Priority',
    priority: {
      high: 'high',
      medium: 'medium',
      low: 'low',
    },
    addTaskButon: 'Add Task',
    assign: 'Assign to',
  },
  updateCard: {
    title: 'Edit Card',
    addTaskButon: 'Confirm',
  },
  updateBoard: {
    title: 'Edit Board',
    createButton: 'Confirm',
  },
  createColumn: {
    title: 'Create column',
    hint: 'Your title',
    addColumnButton: 'Add column',
  },
  editProfile: {
    title: 'Let`s change your information, ',
    namePlaceholder: 'Your new name',
    loginPlaceholder: 'Your new login',
    passwordPlaceholder: 'Your new password',
    changeButton: 'Do it!',
  },
  deleteAccount: 'Delete account',
  cancel: 'Cancel',
  successDeleteValueMessage: `Successfully deleted:`,
  boardsPage: {
    Hello: 'Hello',
    'You have': 'You have',
    'Boards (0)': 'no boards',
    'Boards (1)': ' board',
    'Boards (2-4)': ' boards',
    'Boards (5+)': ' boards',
    'To do': 'to do',
    'Keep up the good work!': ' Keep up the good work!',
    Create: 'Create',
    'New Board': 'New Board',
  },
  mainPage: {
    title: 'YOUR PROJECT MANAGER IN ONE SPACE',
    description:
      'This is a project management program that allows you to centrally manage tasks and their timely completion. Trackers are widely used in project management, because they allow you to easily monitor all work processes and control the work of the team',
  },
  header: {
    LogOut: 'LOG OUT',
    SignIn: 'SIGN IN',
    SignUp: 'SIGN UP',
    Theme: 'Theme',
    ThemeDefault: 'Default',
    ThemeDark: 'Dark',
    EN: 'EN',
    RU: 'RU',
    SearchNothing: 'Nothing found yet. Another attempt?',
    SearchBoard: 'Search Board...',
    Search: 'Search',
  },
  profile: {
    DeleteProfile: 'Delete Profile',
    ChangePassword: 'Change Password',
    ChangeLogin: 'Change Login',
    EditProfile: 'Edit Profile',
  },
  currentBoardPage: {
    'See all Boards': 'See all Boards',
    'New column': 'New column',
  },
};

export const RussianState: ILanguage = {
  deleteItemModal: {
    title: 'Удалить',
    confirmButton: 'Подтвердить',
  },
  registrationModal: {
    title: 'Регистрация',
    namePlaceholder: 'Ваше имя',
    loginPlaceholder: 'Ваш логин',
    passwordPlaceholder: 'Ваш пароль',
    registrationButton: 'Зарегистрироваться',
    changeModalToSignIn: 'Уже есть аккаунт? Войдите в него',
  },
  loginModal: {
    title: 'Авторизация',
    loginPlaceholder: 'Ваш логин',
    passwordPlaceholder: 'Ваш пароль',
    logInButton: 'Войти',
    changeModalToSignUp: 'Еще нет аккаунта? Создать',
  },
  createBoard: {
    title: 'Новая доска',
    hint: 'Название',
    description: 'Описание',
    createButton: 'Создать',
  },
  createCard: {
    title: 'Новая карточка',
    hint: 'Название',
    description: 'Описание',
    titlePriority: 'Приоритет',
    priority: {
      high: 'высокий',
      medium: 'средний',
      low: 'низкий',
    },
    addTaskButon: 'Добавить карточку',
    assign: 'Назначить к задаче',
  },
  updateCard: {
    title: 'Редактировать карточку',
    addTaskButon: 'Подтвердить',
  },
  updateBoard: {
    title: 'Редактировать доску',
    createButton: 'Подтвердить',
  },
  createColumn: {
    title: 'Добавить колонку',
    hint: 'Ваша колонка',
    addColumnButton: 'Добавить',
  },
  editProfile: {
    title: 'Давайте изменим информацию о вас, ',
    namePlaceholder: 'Ваше новое имя',
    loginPlaceholder: 'Ваш новый логин',
    passwordPlaceholder: 'Ваш новый пароль',
    changeButton: 'Изменить',
  },
  deleteAccount: 'Удалить аккаунт',
  successDeleteValueMessage: `Успешно удалено:`,
  cancel: 'Отменить',
  boardsPage: {
    Hello: 'Привет',
    'You have': 'У тебя',
    'Boards (0)': 'нет досок',
    'Boards (1)': ' доска',
    'Boards (2-4)': ' доски',
    'Boards (5+)': ' досок',
    'To do': 'для выполнения',
    'Keep up the good work!': ' Продолжай в том же духе!',
    Create: 'Создать',
    'New Board': 'Новая доска',
  },
  mainPage: {
    title: 'ТВОЙ МЕНЕДЖЕР ПРОЕКТОВ В ОДНОМ МЕСТЕ',
    description:
      'Это программа для управления проектами, которая позволяет централизованно руководить задачами и их своевременным выполнением. Трекеры широко используются в проектном менеджменте, потому что позволяют без труда следить за всеми рабочими процессами и контролировать работу команды',
  },
  header: {
    LogOut: 'Выйти',
    SignIn: 'Войти',
    SignUp: 'Зарегистрироваться',
    Theme: 'Тема',
    ThemeDefault: 'По умолчанию',
    ThemeDark: 'Темная',
    EN: 'EN',
    RU: 'RU',
    SearchNothing: 'Пока ничего не найдено. Еще одна попытка?',
    SearchBoard: 'Найти доску...',
    Search: 'Поиск',
  },
  profile: {
    DeleteProfile: 'Удалить профиль',
    ChangePassword: 'Изменить пароль',
    ChangeLogin: 'Изменить логин',
    EditProfile: 'Редактировать профиль',
  },
  currentBoardPage: {
    'See all Boards': 'Просмтореть все доски',
    'New column': 'Новая колонка',
  },
};

export const initialState: IState = {
  lang: EnglishState,
};
interface IState {
  lang: ILanguage;
}

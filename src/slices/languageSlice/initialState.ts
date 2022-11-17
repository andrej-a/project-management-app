/* MODELS */
import { ILanguage } from '../../models/ILanguage';

export const initialState: ILanguage = {
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
};

export const RussianState: ILanguage = {
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
    'New Board': 'Новую Доску',
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
    DeleteProfile: 'Удалить Профиль',
    ChangePassword: 'Изменить Пароль',
    ChangeLogin: 'Изменить Логин',
    EditProfile: 'Редактировать Профиль',
  },
};

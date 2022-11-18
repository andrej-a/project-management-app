/* MODELS */
import { ILanguage } from '../../models/ILanguage';

export const initialState: ILanguage = {
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
  },
  createColumn: {
    title: 'Create column',
    hint: 'Your title',
    addColumnButton: 'Add column',
  },
  cancel: 'Cancel',
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
    'new Board': 'new Board',
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
    registrationButton: 'Зарегестрироваться',
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
  },
  createColumn: {
    title: 'Добавить колонку',
    hint: 'Ваша колонка',
    addColumnButton: 'Добавить',
  },
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
    'new Board': 'новую Доску',
  },
};

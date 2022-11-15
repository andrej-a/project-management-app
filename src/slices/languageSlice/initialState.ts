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
    changeModalToSignIn: 'You alredy have account? Log In',
  },
  loginModal: {
    title: 'Authorization',
    loginPlaceholder: 'Your login',
    passwordPlaceholder: 'Your password',
    logInButton: 'Log In',
    changeModalToSignUp: 'Don`t have an account? Sign up',
  },
  cancel: 'Cancel',
  Hello: 'Hello',
  'You have': 'You have',
  'Boards (0)': 'no boards',
  'Boards (1)': ' board',
  'Boards (2-4)': ' boards',
  'Boards (5+)': ' boards',
  'To do': 'to do',
  'Keep up the good work!': ' Keep up the good work!',
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
  cancel: 'Отменить',
  Hello: 'Привет',
  'You have': 'У тебя',
  'Boards (0)': 'нет досок',
  'Boards (1)': ' доска',
  'Boards (2-4)': ' доски',
  'Boards (5+)': ' досок',
  'To do': 'для выполнения',
  'Keep up the good work!': ' Продолжай в том же духе!',
};

/* MODELS */
import { ILanguage } from '../../models/ILanguage';

export const initialState: ILanguage = {
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
  Hello: 'Привет',
  'You have': 'У тебя',
  'Boards (0)': 'нет досок',
  'Boards (1)': ' доска',
  'Boards (2-4)': ' доски',
  'Boards (5+)': ' доскок',
  'To do': 'для выполнения',
  'Keep up the good work!': ' Продолжай в том же духе!',
};

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
    'new Board': 'new Board',
  },
  currentBoardPage: {
    'See all Boards': 'See all Boards',
    'New column': 'New column',
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
    'new Board': 'новую Доску',
  },
  currentBoardPage: {
    'See all Boards': 'Просмтореть все доски',
    'New column': 'Новая колонка',
  },
};

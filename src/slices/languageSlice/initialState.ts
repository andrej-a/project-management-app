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
  mainPage: {
    title: 'YOUR PROJECT MANAGER IN ONE SPACE',
    description:
      'This is a project management program that allows you to centrally manage tasks and their timely completion. Trackers are widely used in project management, because they allow you to easily monitor all work processes and control the work of the team',
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
  mainPage: {
    title: 'ТВОЙ МЕНЕДЖЕР ПРОЕКТОВ В ОДНОМ МЕСТЕ',
    description:
      'Это программа для управления проектами, которая позволяет централизованно руководить задачами и их своевременным выполнением. Трекеры широко используются в проектном менеджменте, потому что позволяют без труда следить за всеми рабочими процессами и контролировать работу команды',
  },
};

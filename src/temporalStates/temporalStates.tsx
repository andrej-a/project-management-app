import { IBoard } from '../models/IBoard';
import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';

export const userName = 'Stephanie';
export const boards: IBoard[] = [
  {
    _id: '6373dc7f7a0a06b9b7c6db2c',
    title: 'string',
    owner: 'string',
    users: ['string'],
  },
  {
    _id: '6376a7607a0a06b9b7c6db66',
    title: 'Board2',
    owner: 'Liza',
    users: ['Nastya'],
  },
  {
    _id: '6378cc970507883684d0ecbe',
    title: 'Some column',
    owner: 'Andrej',
    users: ['string'],
  },
  {
    _id: '6378cfaf0507883684d0ecda',
    title: 'Some column',
    owner: '6378cf850507883684d0ecd7',
    users: ['string'],
  },
  {
    _id: '6378fce70507883684d0ece2',
    title: 'Ilon desk',
    owner: '637343977a0a06b9b7c6db22',
    users: ['string'],
  },
];
export const columns: IColumn[] = [
  {
    _id: '6378fd060507883684d0ece4',
    title: 'Ilon column',
    order: 0,
    boardId: '6378fce70507883684d0ece2',
  },
  {
    _id: '6378fe190507883684d0eceb',
    title: 'Ilon column new',
    order: 1,
    boardId: '6378fce70507883684d0ece2',
  },
];
export const tasks: ITask[] = [
  {
    _id: '6378fd990507883684d0ece7',
    title: 'string',
    order: 0,
    description: 'string',
    userId: '0',
    boardId: '6378fce70507883684d0ece2',
    columnId: '6378fd060507883684d0ece4',
    users: ['priority: high', 'idUser'],
  },
  {
    _id: '6378fe3f0507883684d0ecee',
    title: 'new task',
    order: 2,
    description: 'task in new column',
    userId: '0',
    boardId: '6378fce70507883684d0ece2',
    columnId: '6378fe190507883684d0eceb',
    users: ['priority: high', 'idUser'],
  },
  {
    _id: '6378fe4f0507883684d0ecf1',
    title: 'another one task in new column',
    order: 0,
    description: 'task in new column',
    userId: '0',
    boardId: '6378fce70507883684d0ece2',
    columnId: '6378fe190507883684d0eceb',
    users: ['priority: high', 'idUser'],
  },
];

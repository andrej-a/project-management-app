import { IBoard } from '../models/IBoard';
import { IColumn } from '../models/IColumn';
import { ITask } from '../models/ITask';

export const userName = 'Stephanie';
export const boards: IBoard[] = [
  {
    id: '70c4d451-d846-443e-9ba6-87c0ad96a180',
    title: 'Homework tasks',
    description: 'My board tasks',
  },
  {
    id: '44cc7553-4d79-48d1-adb8-293b7a0a7171',
    title: 'Homework tasks1',
    description: 'My board tasks',
  },
  {
    id: 'e9ebcc22-958c-4cbc-9831-176a888a24e2',
    title: 'Homework tasks2',
    description: 'My board tasks',
  },
  {
    id: '81bb1043-115d-460e-9a03-f9100092b686',
    title: 'Homework tasks3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non iste, vitae esse, delectus maxime voluptas, laborum magni ipsum nesciunt rem magnam suscipit explicabo! Voluptatem animi deserunt enim beatae culpa.',
  },
];
export const columns: IColumn[] = [
  {
    _id: '6373dca57a0a06b9b7c6db30',
    title: 'New project',
    order: 0,
    boardId: '6373dc7f7a0a06b9b7c6db2c',
  },
  {
    _id: '637510c37a0a06b9b7c6db43',
    title: 'In progress',
    order: 0,
    boardId: '6373dc7f7a0a06b9b7c6db2c',
  },
];
export const tasks: { [key: string]: ITask[] } = {
  '6373dca57a0a06b9b7c6db30': [
    {
      _id: '637510997a0a06b9b7c6db3d',
      title: 'First task',
      order: 0,
      description: '12121212',
      userId: '0',
      boardId: '6373dc7f7a0a06b9b7c6db2c',
      columnId: '6373dca57a0a06b9b7c6db30',
      users: ['string'],
    },
    {
      _id: '637510a27a0a06b9b7c6db40',
      title: 'Second task',
      order: 0,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non iste, vitae esse, delectus maxime voluptas, laborum magni ipsum nesciunt rem magnam suscipit explicabo! Voluptatem animi deserunt enim beatae culpa.',
      userId: '0',
      boardId: '6373dc7f7a0a06b9b7c6db2c',
      columnId: '6373dca57a0a06b9b7c6db30',
      users: ['string'],
    },
  ],
  '637510c37a0a06b9b7c6db43': [
    {
      _id: '637510c37a0a06b9b7c6db43',
      title: 'Blablabla',
      order: 0,
      description: 'Hello world',
      userId: '0',
      boardId: '6373dc7f7a0a06b9b7c6db2c',
      columnId: '6373dca97a0a06b9b7c6db33',
      users: ['string'],
    },
  ],
};

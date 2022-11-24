import { createAsyncThunk } from '@reduxjs/toolkit';
import { getColumnTasks } from '../../service/tasks/getColumnTasks';

export const ALL_TASKS_FETCHING = 'ALL_TASKS_FETCHING';

type Params = {
  idBoard: string;
  idColumn: string;
};
export const fetchAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async ({ idBoard, idColumn }: Params) => {
    // eslint-disable-next-line no-console
    console.log(idBoard, idColumn);
    return getColumnTasks(idBoard, idColumn);
  }
);

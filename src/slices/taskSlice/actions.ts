import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateCardData } from '../../models/IInputData';
import { createNewTask } from '../../service/tasks/createTask';
import { getBoardTasks } from '../../service/tasks/getBoardTasks';
import { ITasksSet } from '../../models/ITasksSet';
import { updateTasksSet } from '../../service/tasks/updateTasksSet';
import { updateTask } from '../../service/tasks/updateTask';
import { IBoard } from '../../models/IBoard';
import { getAllUserTasks } from '../../service/tasks/getAllUserTasks';

export const ALL_TASKS_FETCHING = 'ALL_TASKS_FETCHING';

type Params = {
  boardId: string;
};

type Params2 = {
  task: ICreateCardData;
};

export const fetchAllTasks = createAsyncThunk('tasks/getAllTasks', async ({ boardId }: Params) => {
  // eslint-disable-next-line no-console
  console.log(boardId);
  return getBoardTasks(boardId);
});
export const fetchNewTasks = createAsyncThunk('tasks/createTask', async ({ task }: Params2) => {
  return createNewTask(task);
});
export const fetchTasksSet = createAsyncThunk(
  'tasks/updateTasksSet',
  async (tasks: ITasksSet[]) => {
    return updateTasksSet(tasks);
  }
);
export const fetchTask = createAsyncThunk('tasks/updateTask', async (task: ICreateCardData) => {
  return updateTask(task);
});

export const fetchAllUserTasks = createAsyncThunk(
  'tasks/getAllUserTasks',
  async (boards: IBoard[]) => {
    return getAllUserTasks(boards);
  }
);

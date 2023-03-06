import { ITask } from '../models/ITask';
import { ITasksSet } from '../models/ITasksSet';

export const convertTasksArrToUpdateArr = (tasks: ITask[]): ITasksSet[] => {
  return tasks.map(({ _id, order, columnId }) => {
    return { _id, order, columnId };
  });
};

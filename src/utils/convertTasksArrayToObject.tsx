import { ITask } from '../models/ITask';

export const convertTasksArrayToObject = (tasks: ITask[]) => {
  const resulObj: { [key: string]: ITask[] } = {};
  tasks.forEach((task) => {
    if (resulObj[task.columnId]) resulObj[task.columnId] = [...resulObj[task.columnId], task];
    else resulObj[task.columnId] = [task];
  });
  return resulObj;
};

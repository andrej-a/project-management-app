import { ITask } from '../../models/ITask';

import { tasks } from '../../temporalStates/temporalStates';

interface ITaskSlice {
  isLoading: boolean;
  isError: boolean;
  tasks: ITask[];
  currentTask: ITask | undefined;
}

export const initialState: ITaskSlice = {
  isLoading: false,
  isError: false,
  tasks: tasks,
  currentTask: undefined,
};

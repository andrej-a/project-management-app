import { ITask } from '../../models/ITask';

interface ITaskSlice {
  isLoading: boolean;
  isError: boolean;
  tasks: ITask[];
  currentTask: ITask | undefined;
  newTaskColumnId: string | undefined;
}

export const initialState: ITaskSlice = {
  isLoading: false,
  isError: false,
  tasks: [],
  currentTask: undefined,
  newTaskColumnId: undefined,
};

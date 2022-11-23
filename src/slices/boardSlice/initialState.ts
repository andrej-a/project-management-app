/* MODELS */
import { IBoard } from '../../models/IBoard';
import { IColumn } from '../../models/IColumn';
import { ITask } from '../../models/ITask';
import { IUser } from '../../models/IUser';

/**FAKE DATA */
import { boards, columns, tasks } from '../../temporalStates/temporalStates';

interface IBoardSlice {
  boards: IBoard[];
  columns: IColumn[];
  tasks: ITask[];
  users: IUser[];
  currentTask: ITask | undefined;
  currentBoard: ITask | undefined;
}
export const initialState: IBoardSlice = {
  boards: boards,
  columns: columns.sort((a: IColumn, b: IColumn) => a.order - b.order),
  tasks: tasks.sort((a: ITask, b: ITask) => a.order - b.order),
  users: [],
  currentTask: undefined,
  currentBoard: undefined,
};

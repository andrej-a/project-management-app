/* MODELS */
import { IBoard } from '../../models/IBoard';
import { IColumn } from '../../models/IColumn';
import { ITask } from '../../models/ITask';
import { IUser } from '../../models/IUser';

/**FAKE DATA */
import { boards, columns, getTasksSetQuerryAnswer } from '../../temporalStates/temporalStates';

interface IBoardSlice {
  board: IBoard;
  columns: IColumn[];
  tasks: ITask[];
  users: IUser[];
}
export const initialState: IBoardSlice = {
  board: boards[0],
  columns: columns,
  tasks: getTasksSetQuerryAnswer,
  users: [],
};

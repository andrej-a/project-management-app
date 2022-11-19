/* MODELS */
import { IBoard } from '../../models/IBoard';
import { IColumn } from '../../models/IColumn';
import { ITask } from '../../models/ITask';
import { IUser } from '../../models/IUser';

/**FAKE DATA */
import {
  boards,
  columns,
  getTasksSetQuerryAnswer,
  tasks,
} from '../../temporalStates/temporalStates';
import { convertTasksArrayToObject } from '../../utils/convertTasksArrayToObject';

interface IBoardSlice {
  board: IBoard;
  columns: IColumn[];
  /*tasks: {
    [key: string]: ITask[];
  };*/
  tasks: ITask[];
  users: IUser[];
}
export const initialState: IBoardSlice = {
  board: boards[0],
  columns: columns,
  tasks: getTasksSetQuerryAnswer,
  users: [],
};

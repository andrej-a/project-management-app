/* MODELS */
import { IBoard } from '../../models/IBoard';
import { IColumn } from '../../models/IColumn';
import { ITask } from '../../models/ITask';

/**FAKE DATA */
import { boards, columns, tasks } from '../../temporalStates/temporalStates';

interface IBoardSlice {
  board: IBoard;
  columns: IColumn[];
  tasks: {
    [key: string]: ITask[];
  };
}
export const initialState: IBoardSlice = {
  board: boards[0],
  columns: columns,
  tasks: tasks,
};

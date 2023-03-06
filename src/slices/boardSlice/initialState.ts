import { IBoard } from '../../models/IBoard';

interface IBoardSlice {
  isLoading: boolean;
  boards: IBoard[];
  editBoard: IBoard | undefined;
  currentBoard: IBoard | undefined;
  allSearchedBoards: IBoard[];
}

export const initialState: IBoardSlice = {
  isLoading: false,
  boards: [],
  editBoard: undefined,
  currentBoard: undefined,
  allSearchedBoards: [],
};

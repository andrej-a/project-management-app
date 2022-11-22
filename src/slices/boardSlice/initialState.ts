import { IBoard } from '../../models/IBoard';

interface IBoardSlice {
  isLoading: boolean;
  isError: boolean;
  boards: IBoard[];
  currentBoard: IBoard | undefined;
}

export const initialState: IBoardSlice = {
  isLoading: false,
  isError: false,
  boards: [],
  currentBoard: undefined,
};

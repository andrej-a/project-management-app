import { IBoard } from '../../models/IBoard';

interface IBoardSlice {
  isLoading: boolean;
  boards: IBoard[];
  currentBoard: IBoard | undefined;
}

export const initialState: IBoardSlice = {
  isLoading: false,
  boards: [],
  currentBoard: undefined,
};

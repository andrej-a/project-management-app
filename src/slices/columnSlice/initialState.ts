import { IColumn } from '../../models/IColumn';

interface IColumnSlice {
  isLoading: boolean;
  columns: IColumn[];
}

export const initialState: IColumnSlice = {
  isLoading: false,
  columns: [],
};

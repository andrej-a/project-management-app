import { IColumn } from '../../models/IColumn';

import { columns } from '../../temporalStates/temporalStates';

interface IColumnSlice {
  isLoading: boolean;
  isError: boolean;
  columns: IColumn[];
}

export const initialState: IColumnSlice = {
  isLoading: false,
  isError: false,
  columns: columns,
};

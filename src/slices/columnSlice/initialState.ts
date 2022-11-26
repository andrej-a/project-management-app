import { IColumn } from '../../models/IColumn';

import { columns } from '../../temporalStates/temporalStates';

interface IColumnSlice {
  isLoading: boolean;
  columns: IColumn[];
}

export const initialState: IColumnSlice = {
  isLoading: false,
  columns: columns,
};

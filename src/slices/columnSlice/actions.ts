import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateColumn } from '../../models/IInputData';
import { createNewColumn } from '../../service/columns/createColumn';
import { getAllColumns } from '../../service/columns/getAllColumns';

export const fetchAllColumns = createAsyncThunk('columns/getAll', async (id: string) =>
  getAllColumns(id)
);
export const fetchNewColumn = createAsyncThunk('boards/createBoard', async (data: ICreateColumn) =>
  createNewColumn(data)
);

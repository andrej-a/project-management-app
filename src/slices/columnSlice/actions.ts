import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColumn } from '../../models/IColumn';
import { IColumnsSet } from '../../models/IColumnsSet';
import { ICreateColumn } from '../../models/IInputData';
import { createNewColumn } from '../../service/columns/createColumn';
import { getAllColumns } from '../../service/columns/getAllColumns';
import { updateColumnsSet } from '../../service/columns/updateColumnsSet';
import { updateColumn } from './updateColumn';

export const fetchAllColumns = createAsyncThunk('columns/getAll', async (id: string) => {
  getAllColumns(id);
});

export const fetchNewColumn = createAsyncThunk(
  'columns/createColumn',
  async (data: ICreateColumn) => createNewColumn(data)
);
export const fetchColumnsSet = createAsyncThunk(
  'columns/updateColumnsSet',
  async (columns: IColumnsSet[]) => {
    return updateColumnsSet(columns);
  }
);
export const fetchColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ title, column }: { title: string; column: IColumn }) => {
    return updateColumn(title, column);
  }
);

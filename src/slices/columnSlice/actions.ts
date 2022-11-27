import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColumnsSet } from '../../models/IColumnsSet';
import { ICreateColumn } from '../../models/IInputData';
import { createNewColumn } from '../../service/columns/createColumn';
import { getAllColumns } from '../../service/columns/getAllColumns';
import { updateColumnsSet } from '../../service/columns/updateColumnsSet';

export const fetchAllColumns = createAsyncThunk('columns/getAll', async (id: string) => {
  getAllColumns(id);
});

export const fetchNewColumn = createAsyncThunk('boards/createBoard', async (data: ICreateColumn) =>
  createNewColumn(data)
);
export const fetchColumnsSet = createAsyncThunk(
  'tasks/updateTasksSet',
  async (columns: IColumnsSet[]) => {
    return updateColumnsSet(columns);
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';
import { getAllColumns } from '../../service/columns/getAllColumns';

export const fetchAllColumns = createAsyncThunk('columns/getAll', async (id: string) =>
  getAllColumns(id)
);

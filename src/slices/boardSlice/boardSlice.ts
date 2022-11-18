import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
});

const { actions, reducer } = boardSlice;
export const { setTasks, setColumns } = actions;
export default reducer;

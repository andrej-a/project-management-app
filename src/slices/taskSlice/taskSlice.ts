import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    /**Обновляет одну таску */
    updateTaskOrder: (state, action) => {
      state.tasks[action.payload.index].order = action.payload.order;
      state.tasks[action.payload.index].columnId = action.payload.columnId;
    },
    updateTaskInfo: (state, action) => {
      const task = state.tasks.find((task) => task._id === action.payload._id);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.users = action.payload.users;
      }
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
    setNewTaskColumnId: (state, action) => {
      state.newTaskColumnId = action.payload;
    },
    setAllUserTasks: (state, action) => {
      state.allUserTasks = action.payload;
    },
    setAllSearchedTasks: (state, action) => {
      state.allSearchedTasks = action.payload;
    },
  },
});

const { actions, reducer } = taskSlice;
export const {
  setTasks,
  updateTaskOrder,
  setCurrentTask,
  updateTaskInfo,
  setNewTaskColumnId,
  setAllUserTasks,
  setAllSearchedTasks,
} = actions;
export default reducer;

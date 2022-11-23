import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import application_theme from '../slices/themeSlice/themeSlice';
import modals_state from '../slices/modalsSlice/modalsSlice';
import language from '../slices/languageSlice/languageSlice';
import user from '../slices/userSlice/userSlice';
import board from '../slices/boardSlice/boardSlice';
import task from '../slices/taskSlice/taskSlice';
import column from '../slices/columnSlice/columnSlice';

export const store = configureStore({
  reducer: { application_theme, modals_state, language, board, column, task, user },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

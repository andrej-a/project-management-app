import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import application_theme from '../slices/themeSlice/themeSlice';

export const store = configureStore({
  reducer: { application_theme },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>;

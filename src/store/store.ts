import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import application_theme from '../slices/themeSlice/themeSlice';
import language from '../slices/languageSlice/languageSlice';

export const store = configureStore({
  reducer: { application_theme, language },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

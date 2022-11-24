import { configureStore } from '@reduxjs/toolkit';
import application_theme from '../slices/themeSlice/themeSlice';
import modals_state from '../slices/modalsSlice/modalsSlice';
import language from '../slices/languageSlice/languageSlice';
import user from '../slices/userSlice/userSlice';
import board from '../slices/boardSlice/boardSlice';

export const store = configureStore({
  reducer: { application_theme, modals_state, language, board, user },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

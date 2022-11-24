import { Dispatch } from '@reduxjs/toolkit';
import { localStorageEnum } from '../constants/localStorage';
import { DarkTheme, Default } from '../slices/themeSlice/initialState';
import { themeChange } from '../slices/themeSlice/themeSlice';

export const updateTheme = (
  dispatch: Dispatch,
  theme: localStorageEnum.DARK | localStorageEnum.DEFAULT
) => {
  switch (theme) {
    case localStorageEnum.DARK:
      localStorage.setItem(localStorageEnum.THEME, localStorageEnum.DARK);
      dispatch(themeChange(DarkTheme));
      break;
    default:
      localStorage.setItem(localStorageEnum.THEME, localStorageEnum.DEFAULT);
      dispatch(themeChange(Default));
      break;
  }
};

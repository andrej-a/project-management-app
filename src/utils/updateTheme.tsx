import { Dispatch } from '@reduxjs/toolkit';
import { localStorageEnum, themeEnum } from '../constants/localStorage';
import { DarkTheme, Default } from '../slices/themeSlice/initialState';
import { themeChange } from '../slices/themeSlice/themeSlice';

export const updateTheme = (dispatch: Dispatch, theme: themeEnum.DARK | themeEnum.DEFAULT) => {
  switch (theme) {
    case themeEnum.DARK:
      localStorage.setItem(localStorageEnum.THEME, themeEnum.DARK);
      dispatch(themeChange(DarkTheme));
      break;
    default:
      localStorage.setItem(localStorageEnum.THEME, themeEnum.DEFAULT);
      dispatch(themeChange(Default));
      break;
  }
};

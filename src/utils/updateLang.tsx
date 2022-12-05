import { Dispatch } from '@reduxjs/toolkit';
import { localStorageEnum, langEnum } from '../constants/localStorage';
import { langChange } from '../slices/languageSlice/languageSlice';
import { EnglishState, RussianState } from '../slices/languageSlice/initialState';

export const updateLang = (dispatch: Dispatch, lang: langEnum.EN | langEnum.RU) => {
  switch (lang) {
    case langEnum.EN:
      localStorage.setItem(localStorageEnum.LANG, langEnum.EN);
      dispatch(langChange(EnglishState));
      break;
    default:
      localStorage.setItem(localStorageEnum.LANG, langEnum.RU);
      dispatch(langChange(RussianState));
      break;
  }
};

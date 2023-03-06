import { TLocalData } from '../models/localDatas';

export enum applicationConstants {
  NO_RESULT_PAGE_BUTTON_TEXT = 'Go back',
  NO_RESULT_PAGE_MAIN_TEXT = 'Sorry, this page is not exist',
}
export const svgDefaultSize = 32;

export enum Styles {
  ACTIVE = 'active',
  CHANGE_COLOR = 'changeColor',
}

export enum SvgSizes {
  SMALL = 22,
  MEDIUM = 32,
}

export const headerHeight = {
  start: 0,
  end: 80,
};

export const localData: TLocalData = ['TASKBAN_USER_ID', 'TASKBAN_USER_NAME', 'TASKBAN_USER_LOGIN'];

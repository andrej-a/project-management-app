/* MODELS */
import { ITheme_Interface } from '../../models/theme_interface';

export const initialState: ITheme_Interface = {
  MAIN_BACKGROUND: '#48409E',
  LIGHT_BACKGROUND: '#FFFFFF',
  DESK_BACKGROUND: '#F1F0FF',
  FRAME_TASK_COLOR: '#BFB9FF',

  TEXT_COLOR: '#FFFFFF',
  TEXT_COLOR_DARK: '#48409E',
  TASK_TEXT: '#6F6F6F',
  LIGHT_GRAY: '#C4C4C4',

  BUTTON_BORDER_COLOR_LIGHT: '#FFFFFF',
  BUTTON_BORDER_COLOR_DARK: '#48409E',
  BUTTON_RED: '#FF7979',
  BUTTON_YELLOW: '#FFBA53',
  BUTTON_GREEN: '#46B220',
};

export const DarkTheme: ITheme_Interface = {
  MAIN_BACKGROUND: '#252525',
  LIGHT_BACKGROUND: '#252525',
  DESK_BACKGROUND: '#383838',
  FRAME_TASK_COLOR: '#878787',

  TEXT_COLOR: '#FFFFFF',
  TEXT_COLOR_DARK: '#FFFFFF',
  TASK_TEXT: '#FFFFFF',
  LIGHT_GRAY: '#C4C4C4',

  BUTTON_BORDER_COLOR_LIGHT: '#FFFFFF',
  BUTTON_BORDER_COLOR_DARK: '#252525',
  BUTTON_RED: '#FF7979',
  BUTTON_YELLOW: '#FFBA53',
  BUTTON_GREEN: '#46B220',
};

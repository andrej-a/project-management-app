/* MODELS */
import { ITheme_Interface } from '../../models/theme_interface';

export const initialState: ITheme_Interface = {
  MAIN_BACKGROUND: '#48409E',
  LIGHT_BACKGROUND: '#FFFFFF',
  DESK_BACKGROUND: '#F1F0FF',
  FRAME_TASK_COLOR: '#BFB9FF',

  TEXT_COLOR: '#FFFFFF',
  TEXT_COLOR_DARK: '#48409E',
  TEXT_COLOR_GREY: '#B8B8B8',
  TASK_TEXT: '#6F6F6F',
  LIGHT_GRAY: '#C4C4C4',

  BUTTON_BORDER_COLOR_LIGHT: '#FFFFFF',
  BUTTON_BORDER_COLOR_DARK: '#48409E',
  INPUT_BORDER_COLOR_LIGHT: '#D0D0D0',
  BUTTON_RED: '#FF7979',
  BUTTON_YELLOW: '#FFBA53',
  BUTTON_GREEN: '#46B220',

  GRADIENT_SECOND_COLOR: '#4332f7',
};

export const DarkTheme: ITheme_Interface = {
  MAIN_BACKGROUND: '#252525',
  LIGHT_BACKGROUND: '#252525',
  DESK_BACKGROUND: '#383838',
  FRAME_TASK_COLOR: '#878787',

  TEXT_COLOR: '#FFFFFF',
  TEXT_COLOR_DARK: '#FFFFFF',
  TEXT_COLOR_GREY: '#B8B8B8',
  TASK_TEXT: '#FFFFFF',
  LIGHT_GRAY: '#C4C4C4',

  BUTTON_BORDER_COLOR_LIGHT: '#FFFFFF',
  BUTTON_BORDER_COLOR_DARK: '#252525',
  INPUT_BORDER_COLOR_LIGHT: '#D0D0D0',
  BUTTON_RED: '#FF7979',
  BUTTON_YELLOW: '#FFBA53',
  BUTTON_GREEN: '#46B220',

  GRADIENT_SECOND_COLOR: '#434343',
};

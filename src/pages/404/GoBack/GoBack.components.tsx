import styled from 'styled-components';
import { store } from '../../../store/store';
const { MAIN_BACKGROUND, BUTTON_BORDER_COLOR_DARK, TEXT_COLOR_DARK, BUTTON_BORDER_COLOR_LIGHT } =
  store.getState().application_theme;

export const GoBackButtonWrapper = styled.div`
  padding: 20px;
`;
export const GoBackButton = styled.button`
  width: 136px;
  height: 34px;
  border: 3px solid ${BUTTON_BORDER_COLOR_DARK};
  color: ${TEXT_COLOR_DARK};
  font-size: 20px;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${BUTTON_BORDER_COLOR_DARK};
    border: 3px solid transparent;
    color: ${BUTTON_BORDER_COLOR_LIGHT};
  }
`;

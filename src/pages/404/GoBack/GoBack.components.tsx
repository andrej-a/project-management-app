import styled from 'styled-components';
import { store } from '../../../store/store';
const { MAIN_BACKGROUND, BUTTON_BORDER_COLOR_LIGHT, TEXT_COLOR } =
  store.getState().application_theme;

export const GoBackButtonWrapper = styled.div`
  padding: 20px;
`;
export const GoBackButton = styled.button`
  width: 136px;
  height: 34px;
  border: 2px solid ${BUTTON_BORDER_COLOR_LIGHT};
  color: ${TEXT_COLOR};
  font-size: 20px;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${BUTTON_BORDER_COLOR_LIGHT};
    border: 2px solid transparent;
    color: ${MAIN_BACKGROUND};
  }
`;

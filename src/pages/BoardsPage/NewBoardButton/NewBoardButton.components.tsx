import styled from 'styled-components';
import { store } from '../../../store/store';
const { MAIN_BACKGROUND } = store.getState().application_theme;

export const NewBoardButtonStyled = styled.div`
  height: min-content;
  min-width: 332px;
  color: ${MAIN_BACKGROUND};
  font-size: 24px;
  line-height: 29px;
  position: relative;
  padding-left: 67px;

  &::before,
  &::after {
    display: block;
    content: '';
    width: 37px;
    min-height: 4px;
    background-color: ${MAIN_BACKGROUND};
    position: absolute;
  }

  &::before {
    top: 50%;
    left: 0;
  }

  &::after {
    top: 50%;
    left: 0;
    transform: rotate(90deg);
  }
`;

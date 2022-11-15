import styled from 'styled-components';
import { store } from '../../../store/store';
const { MAIN_BACKGROUND } = store.getState().application_theme;

export const NewBoardButtonWrapper = styled.button`
  min-height: 100%;
  border-radius: 20px;
  min-width: 332px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 31px 33px;
  text-align: left;
  background-color: transparent;
  border: 1px dashed transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  div {
    height: min-content;
    color: ${MAIN_BACKGROUND};
    font-size: 24px;
    line-height: 29px;
    position: relative;
    padding-left: 67px;
    transition: transform 0.3s ease-in-out;

    &::before,
    &::after {
      display: block;
      content: '';
      width: 37px;
      min-height: 4px;
      background-color: ${MAIN_BACKGROUND};
      position: absolute;
      transition: transform 0.7s ease-in-out;
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
  }

  &:hover {
    border: 1px dashed ${MAIN_BACKGROUND};
    div {
      transform: scale(1.06);
      &::before {
        transform: rotate(180deg);
      }
      &::after {
        transform: rotate(270deg);
      }
    }
  }
`;

import styled from 'styled-components';
import { store } from '../../../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme.theme;

export const BackBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;

  div {
    height: min-content;
    color: ${TEXT_COLOR_DARK};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    padding-left: 16px;
    transition: transform 0.3s ease-in-out;

    &::before,
    &::after {
      display: block;
      content: '';
      width: 8px;
      min-height: 2px;
      background-color: ${TEXT_COLOR_DARK};
      position: absolute;
      transition: transform 0.5s ease-in-out;
    }
    &::before {
      top: calc(50% - 3px);
      left: 0px;
      transform: rotate(-45deg);
    }
    &::after {
      top: calc(50% + 1.4px);
      left: 0;
      transform: rotate(45deg);
    }
  }

  &:hover {
    div {
      transform: scale(1.06);
      &::before {
        transform: translateX(-4px) rotate(-45deg);
      }
      &::after {
        transform: translateX(-4px) rotate(45deg);
      }
    }
  }
`;

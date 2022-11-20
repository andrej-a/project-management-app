import styled from 'styled-components';
import { size } from '../../../../constants/screenSizes';
import { store } from '../../../../store/store';
const { TASK_TEXT, MAIN_BACKGROUND, LIGHT_BACKGROUND } = store.getState().application_theme.theme;

export const TitleWrapper = styled.div`
  max-width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
  input {
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: 20px;
    background-color: transparent;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
    color: ${TASK_TEXT};
    cursor: pointer;
  }
  input:focus {
    max-width: 100%;
    border: 3px solid ${MAIN_BACKGROUND};
    background-color: ${LIGHT_BACKGROUND};
    outline: none;
    transition: padding 0.3s;
    padding-left: 9px;
    padding-right: 70px;
    cursor: text;
  }
  input:focus ~ .buttons {
    display: flex;
  }
  .buttons {
    gap: 5px;
    flex-direction: row;
    position: absolute;
    right: 9px;
    top: 0;
    height: 100%;
    display: none;
  }
`;

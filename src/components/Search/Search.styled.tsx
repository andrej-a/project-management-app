import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK, TEXT_COLOR, TASK_TEXT, FRAME_TASK_COLOR } =
  store.getState().application_theme;
import { size } from '../../constants/screenSizes';

export const FormWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  svg {
    fill: ${TEXT_COLOR_DARK};
    position: absolute;
    top: 8px;
    left: 18px;
  }
`;
export const InputSearch = styled.input`
  width: 350px;
  height: 40px;
  color: ${TASK_TEXT};
  background-color: ${TEXT_COLOR};
  border-radius: 20px;
  padding-left: 72px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  border: 3px solid ${FRAME_TASK_COLOR};
`;

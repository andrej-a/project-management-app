import styled from 'styled-components';

import { store } from '../../store/store';
const { TEXT_COLOR_DARK, TEXT_COLOR, TASK_TEXT } = store.getState().application_theme;

export const FormWrapper = styled.div`
  width: auto;
  position: relative;
  margin-top: 20px;
  svg {
    fill: ${TEXT_COLOR_DARK};
    position: absolute;
    top: 5px;
    left: 18px;
  }
`;
export const InputSearch = styled.input`
  width: 340px;
  height: 30px;
  color: ${TASK_TEXT};
  background-color: ${TEXT_COLOR};
  border-radius: 4px;
  padding-left: 72px;
  font-size: 20px;
  font-weight: 400;
`;
// export const ButtonSearch = styled.button`
//   width: 30px;
//   height: 30px;
//   background-image: url(${IconSearch});
//   background-color: transparent;
//   border: none;
//   position: absolute;
//   top: 4px;
//   right: 7px;
// `;

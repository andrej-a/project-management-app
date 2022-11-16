import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK, TEXT_COLOR, TASK_TEXT } = store.getState().application_theme;
import { size } from '../../constants/screenSizes';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: relative;
  svg {
    fill: ${TEXT_COLOR_DARK};
    position: absolute;
    top: 8px;
    left: 18px;
  }
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;
export const Line = styled.div`
  margin-left: 22px;
  border-left: 3px solid ${TEXT_COLOR};
  height: 44px;
  @media (max-width: ${size.laptopM}) {
    display: none;
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
  @media (max-width: ${size.laptopM}) {
    width: 260px;
  }
`;

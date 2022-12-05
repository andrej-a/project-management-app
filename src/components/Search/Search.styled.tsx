import styled from 'styled-components';
import { size } from '../../constants/screenSizes';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const DeleteIconDiv = styled.div`
  display: none;
  position: absolute;
  top: 2px;
  right: 56px;
  &.active {
    display: flex;
  }
  svg {
    cursor: pointer;
  }
  @media (max-width: ${size.mobileM}) {
    right: -13vw;
  }
`;

export const InputSearchWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
    position: absolute;
    top: 8px;
    left: 18px;
  }
  @media (max-width: ${size.mobileM}) {
    width: 50vw;
    svg {
      left: -10vw;
    }
  }
`;

export const SearchSelect = styled.select`
  width: 160px;
  height: 40px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  background-color: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  border: 3px solid ${({ theme }) => theme.FRAME_TASK_COLOR};
`;

export const InputSearch = styled.input`
  width: 350px;
  height: 40px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  background-color: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border-radius: 20px;
  padding-left: 50px;
  padding-right: 42px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  border: 3px solid ${({ theme }) => theme.FRAME_TASK_COLOR};
  &::-ms-clear {
    color: #f00; // красный цвет
  }
  @media (max-width: ${size.mobileM}) {
    width: 80vw;
  }
`;

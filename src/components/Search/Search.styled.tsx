import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const InputSearchWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  svg {
    fill: ${({ theme }) => theme.MAIN_BACKGROUND};
    position: absolute;
    top: 8px;
    left: 18px;
  }
`;

export const SearchSelect = styled.select`
  width: 160px;
  height: 40px;
  color: ${({ theme }) => theme.TASK_TEXT};
  background-color: ${({ theme }) => theme.TEXT_COLOR};
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
  color: ${({ theme }) => theme.TASK_TEXT};
  background-color: ${({ theme }) => theme.TEXT_COLOR};
  border-radius: 20px;
  padding-left: 62px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  outline: none;
  border: 3px solid ${({ theme }) => theme.FRAME_TASK_COLOR};
`;

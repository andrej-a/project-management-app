import styled from 'styled-components';
/* CONSTANTS */
import { size } from '../../../../../constants/screenSizes';

export const CreateColumnWrapper = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input[type='text'] {
      width: 100%;
      background: ${({ theme }) => theme.LIGHT_BACKGROUND};
      outline: none;
      border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      height: 40px;
      padding: 12px 0px 10px 10px;
      color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    }

    input[type='submit'] {
      padding: 9px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 20px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: ${({ theme }) => theme.BUTTON_COLOR_TEXT};
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.BUTTON_GREEN};
        color: ${({ theme }) => theme.TEXT_COLOR};
      }
      &:disabled {
        cursor: not-allowed;
        background: transparent;
        outline: 2px solid ${({ theme }) => theme.BUTTON_BACKGROUND};
        color: ${({ theme }) => theme.TEXT_COLOR_DARK};
      }
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 22px;
`;

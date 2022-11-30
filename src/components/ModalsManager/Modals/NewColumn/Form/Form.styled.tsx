import styled from 'styled-components';
/* CONSTANTS */
import { size } from '../../../../../constants/screenSizes';

export const CreateColumnWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 22px 44px 0px 44px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input[type='text'] {
      width: 400px;
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

      @media (max-width: ${size.tablet}) {
        width: 300px;
      }

      @media (max-width: ${size.mobileL}) {
        width: 200px;
      }
    }

    input[type='submit'] {
      padding: 10px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 20px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 37px;
      color: ${({ theme }) => theme.BUTTON_COLOR_TEXT};
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.BUTTON_GREEN};
        color: ${({ theme }) => theme.TEXT_COLOR};
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

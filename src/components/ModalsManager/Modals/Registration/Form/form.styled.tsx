import styled from 'styled-components';
/* CONSTANTS */
import { size } from '../../../../../constants/screenSizes';

export const FormWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 19px 42px;

  form {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    input[type='text'] {
      background: ${({ theme }) => theme.LIGHT_BACKGROUND};
      width: 306px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      padding: 12px 0px 10px 11px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    }
    input[type='text']::-moz-placeholder {
      color: ${({ theme }) => theme.TEXT_COLOR_GREY};
    }
    input[type='text']::-webkit-input-placeholder {
      color: ${({ theme }) => theme.TEXT_COLOR_GREY};
    }

    input[type='submit'] {
      margin-top: 18px;
      padding: 10px 37px;
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
      }
    }

    @media (max-width: ${size.mobileL}) {
      input[type='text'] {
        width: 250px;
      }
    }

    @media (max-width: ${size.mobileM}) {
      input[type='text'] {
        width: 200px;
      }
    }
  }
`;

export const InputError = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.TEXT_COLOR_GREY};
`;

export const InputWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
`;

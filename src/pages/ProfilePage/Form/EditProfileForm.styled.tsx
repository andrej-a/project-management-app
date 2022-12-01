import styled from 'styled-components';

import { size } from '../../../constants/screenSizes';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 0 20px -20px 20px;

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
      margin-top: 20px;
      padding: 10px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 40px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      border: 0;
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
        border: 2px solid ${({ theme }) => theme.BUTTON_BACKGROUND};
        color: ${({ theme }) => theme.TEXT_COLOR_DARK};
      }
    }

    @media (max-width: ${size.tablet}) {
      input[type='text'] {
        width: 345px;
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

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin: 20px;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

export const DeleteAccountButton = styled.button`
  width: auto;
  height: auto;
  padding: 10px 37px;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  background: transparent;
  color: ${({ theme }) => theme.BUTTON_RED};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.BUTTON_RED};
    color: ${({ theme }) => theme.TEXT_COLOR};
  }
`;

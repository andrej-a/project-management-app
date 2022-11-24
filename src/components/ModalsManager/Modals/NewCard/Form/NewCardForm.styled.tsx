import styled from 'styled-components';
import { size } from '../../../../../constants/screenSizes';

export const FormWrapper = styled.div`
  margin: 22px 41px 22px 0px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    textarea {
      width: 400px;
      margin-bottom: 22px;
      background: ${({ theme }) => theme.LIGHT_BACKGROUND};
      outline: none;
      border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      overflow: hidden;
      resize: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: ${({ theme }) => theme.TEXT_COLOR_DARK};

      @media (max-width: ${size.tablet}) {
        width: 300px;
      }

      @media (max-width: ${size.mobileL}) {
        width: 200px;
      }
    }

    input[type='radio'] {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      position: -9999px;
    }

    input[type='submit'] {
      padding: 10px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 20px;
      margin-bottom: 37px;
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
  }
`;

export const PriorityTitle = styled.p`
  margin-bottom: 22px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

export const LabelWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;

  input[type='radio']:checked + label {
    background: ${({ theme }) => theme.MAIN_BACKGROUND};
    border-color: ${({ theme }) => theme.MAIN_BACKGROUND};
    color: ${({ theme }) => theme.TEXT_COLOR};
  }

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;

export const HighPriorityLabel = styled.label`
  padding: 5px 15px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border-radius: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.BUTTON_RED};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.BUTTON_RED};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.LIGHT_BACKGROUND};
    background: ${({ theme }) => theme.BUTTON_RED};
  }
`;

export const MediumPriorityLabel = styled(HighPriorityLabel)`
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  color: ${({ theme }) => theme.BUTTON_YELLOW};
  border-color: ${({ theme }) => theme.BUTTON_YELLOW};
  &:hover {
    color: ${({ theme }) => theme.LIGHT_BACKGROUND};
    background: ${({ theme }) => theme.BUTTON_YELLOW};
  }
`;

export const LowPriorityLabel = styled(HighPriorityLabel)`
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  color: ${({ theme }) => theme.BUTTON_GREEN};
  border-color: ${({ theme }) => theme.BUTTON_GREEN};
  &:hover {
    color: ${({ theme }) => theme.LIGHT_BACKGROUND};
    background: ${({ theme }) => theme.BUTTON_GREEN};
  }
`;

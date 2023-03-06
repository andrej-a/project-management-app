import styled from 'styled-components';
import { size } from '../../../../../constants/screenSizes';

export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 22px;
    textarea,
    input[type='text'] {
      font-family: 'Libre Franklin', sans-serif;
      width: 100%;
      background: ${({ theme }) => theme.LIGHT_BACKGROUND};
      outline: none;
      border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      overflow: hidden;
      resize: vertical;
      font-size: 16px;
      line-height: 17px;
      color: ${({ theme }) => theme.TEXT_COLOR_DARK};
      overflow: auto;
      max-height: 210px;
      margin-top: 5px;
    }

    input[type='radio'] {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      position: -9999px;
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

export const PriorityTitle = styled.p`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

export const LabelWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  position: relative;

  input[type='radio']:checked + label {
    background: ${({ theme }) => theme.TEXT_COLOR_DARK};
    border-color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    color: ${({ theme }) => theme.LIGHT_BACKGROUND};
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
  text-align: center;
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

export const SelectAssign = styled.select`
  width: 120px;
  height: 32px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  outline: none;
  border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

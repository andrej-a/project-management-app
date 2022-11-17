import styled from 'styled-components';
import { size } from '../../../../../constants/screenSizes';
import { store } from '../../../../../store/store';
const {
  LIGHT_BACKGROUND,
  INPUT_BORDER_COLOR_LIGHT,
  TEXT_COLOR,
  BUTTON_RED,
  BUTTON_YELLOW,
  BUTTON_GREEN,
  MAIN_BACKGROUND,
} = store.getState().application_theme;

export const FormWrapper = styled.div`
  margin: 22px 41px 22px 0px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 22px;

    input[type='text'] {
      width: 400px;
      background: ${LIGHT_BACKGROUND};
      outline: none;
      border: 1px solid ${INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;

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
    }

    input[type='submit'] {
      padding: 10px 37px;
      background: ${MAIN_BACKGROUND};
      border-radius: 20px;
      margin-bottom: 37px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: ${TEXT_COLOR};
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover:not(:disabled) {
        background: ${LIGHT_BACKGROUND};
        color: ${MAIN_BACKGROUND};
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export const LabelWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;

  input[type='radio']:checked + label {
    background: ${MAIN_BACKGROUND};
    border-color: ${MAIN_BACKGROUND};
    color: ${TEXT_COLOR};
  }

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;

export const HighPriorityLabel = styled.label`
  padding: 5px 15px;
  background: ${LIGHT_BACKGROUND};
  border-radius: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${BUTTON_RED};
  cursor: pointer;
  border: 2px solid ${BUTTON_RED};
  transition: all 0.3s ease;
  &:hover {
    color: ${LIGHT_BACKGROUND};
    background: ${BUTTON_RED};
  }
`;

export const MediumPriorityLabel = styled(HighPriorityLabel)`
  background: ${LIGHT_BACKGROUND};
  color: ${BUTTON_YELLOW};
  border-color: ${BUTTON_YELLOW};
  &:hover {
    color: ${LIGHT_BACKGROUND};
    background: ${BUTTON_YELLOW};
  }
`;

export const LowPriorityLabel = styled(HighPriorityLabel)`
  background: ${LIGHT_BACKGROUND};
  color: ${BUTTON_GREEN};
  border-color: ${BUTTON_GREEN};
  &:hover {
    color: ${LIGHT_BACKGROUND};
    background: ${BUTTON_GREEN};
  }
`;

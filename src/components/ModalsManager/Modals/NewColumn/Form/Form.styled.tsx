import styled from 'styled-components';
/* CONSTANTS */
import { size } from '../../../../../constants/screenSizes';
/* STORE */
import { store } from '../../../../../store/store';
const { LIGHT_BACKGROUND, INPUT_BORDER_COLOR_LIGHT, BUTTON_BORDER_COLOR_DARK, TEXT_COLOR } =
  store.getState().application_theme;

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
      background: ${LIGHT_BACKGROUND};
      outline: none;
      border: 1px solid ${INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      height: 40px;
      padding: 12px 0px 10px 10px;

      @media (max-width: ${size.tablet}) {
        width: 300px;
      }

      @media (max-width: ${size.mobileL}) {
        width: 200px;
      }
    }

    input[type='submit'] {
      padding: 10px 37px;
      background: ${BUTTON_BORDER_COLOR_DARK};
      border-radius: 20px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: ${TEXT_COLOR};
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover:not(:disabled) {
        background: ${LIGHT_BACKGROUND};
        color: ${BUTTON_BORDER_COLOR_DARK};
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

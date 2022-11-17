import styled from 'styled-components';
/* STORE */
import { store } from '../../../../../store/store';
/* CONSTANTS */
import { size } from '../../../../../constants/screenSizes';
const {
  LIGHT_BACKGROUND,
  INPUT_BORDER_COLOR_LIGHT,
  TEXT_COLOR_GREY,
  BUTTON_BORDER_COLOR_DARK,
  TEXT_COLOR,
} = store.getState().application_theme;

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
      background: ${LIGHT_BACKGROUND};
      width: 306px;
      height: 40px;
      border: 1px solid ${INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      outline: none;
      padding: 12px 0px 10px 11px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
    input[type='text']::-moz-placeholder {
      color: ${TEXT_COLOR_GREY};
    }
    input[type='text']::-webkit-input-placeholder {
      color: ${TEXT_COLOR_GREY};
    }

    input[type='submit'] {
      margin-top: 18px;
      padding: 10px 37px;
      background: ${BUTTON_BORDER_COLOR_DARK};
      border-radius: 20px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: ${TEXT_COLOR};
      cursor: pointer;
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
  color: ${TEXT_COLOR_GREY};
`;

export const InputWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
`;

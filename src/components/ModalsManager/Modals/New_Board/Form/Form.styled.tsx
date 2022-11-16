import styled from 'styled-components';
import { store } from '../../../../../store/store';
import { size } from '../../../../../constants/screenSizes';
const {
  LIGHT_BACKGROUND,
  INPUT_BORDER_COLOR_LIGHT,
  BUTTON_BORDER_COLOR_DARK,
  TEXT_COLOR,
  BUTTON_RED,
} = store.getState().application_theme;
export const CreateBoardFormWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 22px 59px 0 59px;

  @media (max-width: ${size.tablet}) {
    margin: 22px 29px 0px 29px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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

    input[type='submit'] {
      padding: 10px 37px;
      background: ${BUTTON_BORDER_COLOR_DARK};
      border-radius: 20px;
      margin-bottom: 37px;
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
  }
`;

export const TitleInput = styled.input`
  height: 40px;
  padding: 12px 0px 10px 10px;
`;

export const DescriptionInput = styled.input`
  height: 230px;
  padding: 12px 0px 201px 10px;

  @media (max-width: ${size.mobileL}) {
    padding: 12px 0px 120px 10px;
    height: 150px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CreateCardCancelButton = styled.button`
  width: 180px;
  height: 40px;
  background: ${LIGHT_BACKGROUND};
  border: 2px solid ${BUTTON_RED};
  border-radius: 20px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${BUTTON_RED};
`;

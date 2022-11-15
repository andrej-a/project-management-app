import styled from 'styled-components';
/* STORE */
import { store } from '../../../../store/store';
/* CONSTANTS */
import { size } from '../../../../constants/screenSizes';
const {
  FRAME_TASK_COLOR,
  LIGHT_BACKGROUND,
  TEXT_COLOR_DARK,
  BUTTON_RED,
  MAIN_BACKGROUND,
  TEXT_COLOR,
} = store.getState().application_theme;

export const DeleteItemWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
`;

export const DeleteItemFrame = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  background: ${FRAME_TASK_COLOR};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteItemCard = styled.div`
  width: 390px;
  height: auto;
  border-radius: 10px;
  background: ${LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${size.mobileL}) {
    width: 280px;
  }
`;

export const Title = styled.p`
  margin-top: 54px;
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${TEXT_COLOR_DARK};
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 29px;
  margin-bottom: 35px;
  height: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${size.mobileL}) {
    width: 70%;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const CancelButton = styled.button`
  padding: 7px 35px;
  background: ${LIGHT_BACKGROUND};
  border: 2px solid ${BUTTON_RED};
  border-radius: 20px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${BUTTON_RED};
`;

export const ConfirmButton = styled.button`
  padding: 7px 35px;
  background: ${MAIN_BACKGROUND};
  border: 2px solid ${MAIN_BACKGROUND};
  border-radius: 20px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${TEXT_COLOR};
`;

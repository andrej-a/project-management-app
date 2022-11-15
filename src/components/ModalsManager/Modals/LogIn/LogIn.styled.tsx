import styled from 'styled-components';

/* STORE */
import { store } from '../../../../store/store';
/* CONSTANTS */
import { size } from '../../../../constants/screenSizes';

const { FRAME_TASK_COLOR, LIGHT_BACKGROUND, TEXT_COLOR_DARK, BUTTON_RED } =
  store.getState().application_theme;

export const LogInWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 20px;
`;

export const LogInFrame = styled.div`
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

export const LogInCard = styled.div`
  width: auto;
  height: auto;
  border-radius: 10px;
  background: ${LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
`;

export const LogInTitleWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 38px;
  margin-left: 42px;
`;

export const LogInTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${TEXT_COLOR_DARK};
`;

export const ChangeModalWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const ChangeModal = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: ${TEXT_COLOR_DARK};
`;

export const CancelWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 23px;
  margin-bottom: 43px;
`;

export const Cancel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${BUTTON_RED};
  cursor: pointer;
`;

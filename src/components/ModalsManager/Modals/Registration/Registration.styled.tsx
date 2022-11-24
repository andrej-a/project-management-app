import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 20px;
`;

export const RegistrationFrame = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  background: ${({ theme }) => theme.FRAME_TASK_COLOR};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegistrationCard = styled.div`
  width: auto;
  height: auto;
  border-radius: 10px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
`;

export const RegistrationTitleWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 38px;
  margin-left: 42px;
`;

export const RegistrationTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
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
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

export const CancelWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 23px;
  margin-bottom: 23px;
`;

export const Cancel = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.BUTTON_RED};
  cursor: pointer;
`;

export const WarningMessage = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 19px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.BUTTON_RED};
`;

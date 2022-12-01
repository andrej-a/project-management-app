import styled from 'styled-components';
/* CONSTANTS */
import { size } from '../../../../constants/screenSizes';

export const DeleteItemWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
`;

export const DeleteItemFrame = styled.div`
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

export const DeleteItemCard = styled.div`
  width: 390px;
  height: auto;
  border-radius: 10px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: ${size.mobileL}) {
    width: 280px;
  }
`;

export const Title = styled.p`
  margin-top: 54px;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;

  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 29px;
  height: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    align-items: center;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const CancelButton = styled.button`
  padding: 7px 35px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border: 2px solid ${({ theme }) => theme.BUTTON_RED};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.BUTTON_RED};

  &:hover {
    background: ${({ theme }) => theme.BUTTON_RED};
    color: ${({ theme }) => theme.TEXT_COLOR};
  }
`;

export const ConfirmButton = styled.button`
  padding: 7px 35px;
  background: ${({ theme }) => theme.BUTTON_BACKGROUND};
  border: 0px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.BUTTON_COLOR_TEXT};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.BUTTON_GREEN};
    color: ${({ theme }) => theme.TEXT_COLOR};
  }
`;

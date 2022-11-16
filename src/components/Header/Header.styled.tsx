import styled from 'styled-components';
import { store } from '../../store/store';
const { MAIN_BACKGROUND, TEXT_COLOR, TEXT_COLOR_DARK } = store.getState().application_theme;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  background-color: ${MAIN_BACKGROUND};
  h2 {
    font-family: 'K2D', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: ${TEXT_COLOR};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 7px 36px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 600;
  border: 3px solid ${TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${TEXT_COLOR_DARK};
    background-color: ${TEXT_COLOR};
  }
`;

export const SignUp = styled(Button)`
  color: ${TEXT_COLOR_DARK};
  background-color: ${TEXT_COLOR};
  &:hover {
    color: ${TEXT_COLOR_DARK};
    background-color: ${TEXT_COLOR};
  }
`;

export const SignIn = styled(Button)`
  color: ${TEXT_COLOR};
  background-color: transparent;
  border: 3px solid ${TEXT_COLOR};
`;

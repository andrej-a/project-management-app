import styled from 'styled-components';
import { store } from '../../store/store';
const { MAIN_BACKGROUND, TEXT_COLOR, TEXT_COLOR_DARK } = store.getState().application_theme;
import { size } from '../../constants/screenSizes';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  background-color: ${MAIN_BACKGROUND};
  h2 {
    position: relative;
    z-index: 300;
    font-family: 'K2D', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: ${TEXT_COLOR};
  }
  @media (max-width: ${size.laptop}) {
    &.active {
      width: 100vw;
      height: 100vh;
      z-index: 200px;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      position: fixed;
      z-index: 100;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    display: none;
    &.active {
      display: flex;
      flex-direction: column;
      margin: auto 0;
    }
  }
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
export const BurgerMenu = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 200;
  width: 42px;
  height: 40px;
  position: relative;
  display: none;
  justify-content: center;
  padding: 8px 0px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    width: 36px;
    height: 3px;
    background-color: ${TEXT_COLOR};
    transition: transform 0.4s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    width: 36px;
    height: 3px;
    background-color: ${TEXT_COLOR};
    transition: transform 0.4s ease-in-out;
  }
  span {
    content: '';
    position: absolute;
    top: 20px;
    width: 36px;
    height: 3px;
    background-color: ${TEXT_COLOR};
    transition: transform 0.2s ease-in-out;
    opacity: 100;
  }
  &.active {
    &::before {
      transform: rotate(-45deg);
      margin-top: 11px;
    }
    &::after {
      transform: rotate(45deg);
      margin-bottom: 14px;
    }
    span {
      opacity: 0;
      transform: rotate(45deg);
      margin-top: -3px;
    }
  }
  @media (max-width: ${size.laptop}) {
    display: flex;
  }
`;
export const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${size.laptop}) {
    width: 100%;
  }
`;

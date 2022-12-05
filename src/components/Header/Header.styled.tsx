import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.MAIN_BACKGROUND};
  transition: all 0.3s ease-in-out;
  h2 {
    cursor: pointer;
    position: relative;
    z-index: 300;
    font-family: 'K2D', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.TEXT_COLOR};
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
  &.changeColor {
    background-color: ${({ theme }) => theme.GRADIENT_SECOND_COLOR};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${size.laptop}) {
    display: none;
    &.active {
      display: flex;
      flex-direction: column;
      margin: auto 0;
    }
  }
`;

export const Button = styled.button`
  transition: all 0.3s ease-in-out;
  padding: 7px 36px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.MAIN_BACKGROUND};
    background-color: ${({ theme }) => theme.TEXT_COLOR};
  }
`;

export const SignUp = styled(Button)`
  color: ${({ theme }) => theme.MAIN_BACKGROUND};
  background-color: ${({ theme }) => theme.TEXT_COLOR};
  &:hover {
    color: ${({ theme }) => theme.MAIN_BACKGROUND};
    background-color: ${({ theme }) => theme.TEXT_COLOR};
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

export const SignIn = styled(Button)`
  color: ${({ theme }) => theme.TEXT_COLOR};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
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
    background-color: ${({ theme }) => theme.TEXT_COLOR};
    transition: transform 0.4s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) => theme.TEXT_COLOR};
    transition: transform 0.4s ease-in-out;
  }
  span {
    content: '';
    position: absolute;
    top: 19px;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) => theme.TEXT_COLOR};
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

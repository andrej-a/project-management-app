import styled from 'styled-components';

import { size } from '../../../constants/screenSizes';
import { Button } from '../Header.styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  p {
    font-size: 16px;
  }
  @media (max-width: ${size.laptopL}) {
    gap: 30px;
  }
  @media (max-width: ${size.laptop}) {
    display: none;
    margin: 100px 40px;
    &.active {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.MAIN_BACKGROUND};
  min-width: 100px;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 14px 14px;
  font-weight: 500;

  li {
    width: auto;
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => theme.TEXT_COLOR};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      color: ${({ theme }) => theme.MAIN_BACKGROUND};
      background-color: ${({ theme }) => theme.TEXT_COLOR};
    }
  }
  li:last-child {
    transition: 0.5s;
    &:hover {
      color: ${({ theme }) => theme.MAIN_BACKGROUND};
      background-color: ${({ theme }) => theme.TEXT_COLOR};
      border-radius: 0px 0px 13px 13px;
    }
  }
  @media (max-width: ${size.laptop}) {
    li:hover {
      border-radius: 0;
      background-color: transparent;
      color: ${({ theme }) => theme.TEXT_COLOR};
      border-bottom: 2px solid ${({ theme }) => theme.TEXT_COLOR};
    }
    li:last-child {
      &:hover {
        border-radius: 0;
        background-color: transparent;
        color: ${({ theme }) => theme.TEXT_COLOR};
        border-bottom: 2px solid ${({ theme }) => theme.TEXT_COLOR};
      }
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 0px;
  p {
    color: ${({ theme }) => theme.TEXT_COLOR};
    font-weight: 500;
  }
  svg {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => theme.TEXT_COLOR};
    transform: rotate(90deg);
  }
  @media (max-width: ${size.laptop}) {
    padding: 0px;
  }
`;

export const Switch = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 5;
  display: inline-block;
  &:hover {
    svg {
      transform: rotate(-90deg);
    }
    ${OptionsContainer} {
      display: block;
    }
  }
  @media (max-width: ${size.laptop}) {
    &:hover {
      margin-bottom: 80px;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.5s;
  cursor: pointer;
  p {
    color: ${({ theme }) => theme.TEXT_COLOR};
    font-weight: 500;
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const NewBoardButton = styled(ItemContainer)`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  p {
    color: ${({ theme }) => theme.TEXT_COLOR};
    font-weight: 500;
  }
  svg {
    transition: all 0.5s ease-in-out;
    fill: ${({ theme }) => theme.TEXT_COLOR};
  }
  &:hover {
    transform: scale(1.1);
    svg {
      transform: rotate(90deg);
    }
  }
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.TEXT_COLOR};
  color: ${({ theme }) => theme.MAIN_BACKGROUND};
  border-radius: 100%;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  gap: 30px;
  p {
    color: ${({ theme }) => theme.TEXT_COLOR};
    font-weight: 500;
    max-width: 84px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogOut = styled(Button)`
  color: ${({ theme }) => theme.TEXT_COLOR};
  background-color: transparent;
  padding: 7px 10px;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
  @media (max-width: ${size.laptop}) {
    margin-top: 40px;
  }
`;
export const GoToMainPage = styled.p`
  color: ${({ theme }) => theme.TEXT_COLOR} !important;
  width: 80px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

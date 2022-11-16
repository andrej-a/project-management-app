import styled from 'styled-components';
import { store } from '../../../store/store';
import { Button } from '../Header.styled';
const { MAIN_BACKGROUND, TEXT_COLOR, TEXT_COLOR_DARK } = store.getState().application_theme;
import { size } from '../../../constants/screenSizes';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: ${size.laptopL}) {
    gap: 20px;
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
  transition: 0.5s;
  background-color: ${MAIN_BACKGROUND};
  min-width: 160px;
  z-index: 1;
  transition: 0.5s;
  border-radius: 0px 0px 14px 14px;
  font-weight: 500;
  font-size: 18px;
  li {
    width: auto;
    transition: 0.5s;
    color: ${TEXT_COLOR};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      color: ${MAIN_BACKGROUND};
      background-color: ${TEXT_COLOR};
    }
  }
  li:last-child {
    transition: 0.5s;
    &:hover {
      color: ${MAIN_BACKGROUND};
      background-color: ${TEXT_COLOR};
      border-radius: 0px 0px 13px 13px;
    }
  }
  @media (max-width: ${size.laptop}) {
    li:hover {
      border-radius: 0;
      background-color: transparent;
      color: ${TEXT_COLOR};
      border-bottom: 2px solid ${TEXT_COLOR};
    }
    li:last-child {
      &:hover {
        border-radius: 0;
        background-color: transparent;
        color: ${TEXT_COLOR};
        border-bottom: 2px solid ${TEXT_COLOR};
      }
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 0px;
  p {
    color: ${TEXT_COLOR};
    font-size: 18px;
    font-weight: 500;
  }
  svg {
    transition: 0.5s;
    color: ${TEXT_COLOR};
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
export const NewBoardButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.5s;
  cursor: pointer;
  p {
    color: ${TEXT_COLOR};
    font-size: 18px;
    font-weight: 500;
  }
  svg {
    color: ${TEXT_COLOR};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  background: ${TEXT_COLOR};
  color: ${MAIN_BACKGROUND};
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
  gap: 26px;
  p {
    color: ${TEXT_COLOR};
    font-size: 18px;
    font-weight: 500;
  }
`;

export const LogOut = styled(Button)`
  color: ${TEXT_COLOR};
  background-color: transparent;
  border: 3px solid ${TEXT_COLOR};
  margin: 0 10px;
  @media (max-width: ${size.laptop}) {
    margin-top: 40px;
  }
`;

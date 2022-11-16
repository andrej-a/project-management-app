import styled from 'styled-components';
import { store } from '../../../store/store';
import { Button } from '../Header.styled';
const { MAIN_BACKGROUND, TEXT_COLOR, TEXT_COLOR_DARK } = store.getState().application_theme;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${MAIN_BACKGROUND};
  min-width: 160px;
  z-index: 1;
  transition: 0.5s;
  border-radius: 0px 0px 14px 14px;
  font-weight: 500;
  font-size: 18px;
  li {
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
    &:hover {
      color: ${MAIN_BACKGROUND};
      background-color: ${TEXT_COLOR};
      border-radius: 0px 0px 13px 13px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 10px;
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
`;

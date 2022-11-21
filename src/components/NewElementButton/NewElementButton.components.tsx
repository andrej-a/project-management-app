import styled from 'styled-components';

export const NewElementButtonWrapper = styled.button`
  min-height: 100%;
  border-radius: 20px;
  width: clamp(200px, 332px, 80%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 31px 33px;
  text-align: left;
  background-color: transparent;
  border: 1px dashed transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  min-width: clamp(200px, 332px, 80%);

  div {
    height: min-content;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    font-size: 24px;
    line-height: 29px;
    position: relative;
    padding-left: 67px;
    transition: transform 0.3s ease-in-out;

    &::before,
    &::after {
      display: block;
      content: '';
      width: 37px;
      min-height: 4px;
      background-color: ${({ theme }) => theme.TEXT_COLOR_DARK};
      position: absolute;
      transition: transform 0.5s ease-in-out;
    }
    &::before {
      top: 50%;
      left: 0;
    }
    &::after {
      top: 50%;
      left: 0;
      transform: rotate(90deg);
    }
  }

  &:hover {
    border: 1px dashed ${({ theme }) => theme.TEXT_COLOR_DARK};
    div {
      transform: scale(1.06);
      &::before {
        transform: rotate(90deg);
      }
      &::after {
        transform: rotate(180deg);
      }
    }
  }
`;

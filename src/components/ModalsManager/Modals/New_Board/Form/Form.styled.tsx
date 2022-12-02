import styled from 'styled-components';
import { size } from '../../../../../constants/screenSizes';

export const CreateBoardFormWrapper = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    max-width: 100%;
    input[type='text'],
    .epr-search {
      max-width: 100%;
      background: ${({ theme }) => theme.LIGHT_BACKGROUND} !important;
      outline: none;
      border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      overflow: hidden;
      resize: none;
      color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    }

    input[type='submit'] {
      padding: 9px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 20px;
      border: 0px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: ${({ theme }) => theme.BUTTON_COLOR_TEXT};
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.BUTTON_GREEN};
        color: ${({ theme }) => theme.TEXT_COLOR};
      }
      &:disabled {
        cursor: not-allowed;
        background: transparent;
        outline: 2px solid ${({ theme }) => theme.BUTTON_BACKGROUND};
        color: ${({ theme }) => theme.TEXT_COLOR_DARK};
      }
    }
  }
`;

export const TitleInput = styled.input`
  height: 40px;
  padding: 12px 0px 10px 10px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border-radius: 5px;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;

export const DescriptionInput = styled.textarea`
  height: 150px;
  padding: 12px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  row-gap: 16px !important;
  justify-content: space-between;
  margin-top: 22px;
  gap: 20px;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CreateCardCancelButton = styled.button`
  padding: 9px 37px;
  height: 40px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  border: 2px solid ${({ theme }) => theme.BUTTON_RED};
  border-radius: 20px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.BUTTON_RED};

  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.BUTTON_RED};
    color: ${({ theme }) => theme.TEXT_COLOR};
  }

  margin-right: 10px !important;
  @media (max-width: ${size.mobileL}) {
    margin: 0;
  }
`;
export const EmojiWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  cursor: pointer;

  .emoji {
    font-size: 30px;
    transition: all 0.3s ease-in-out;
  }
  .one,
  .two {
    content: '';
    position: absolute;
    width: 15px;
    height: 3px;
    display: block;
    top: 50%;
    left: calc(50% - 7.5px);
    transition: background 0.3s ease-in-out;
    background-color: transparent;
  }
  .one {
    transform: rotate(45deg);
  }
  .two {
    transform: rotate(-45deg);
  }
  &:hover {
    .one,
    .two {
      background-color: white;
    }
    .emoji {
      filter: brightness(0);
    }
  }
`;

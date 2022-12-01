import styled from 'styled-components';
import { size } from '../../../../../constants/screenSizes';

export const CreateBoardFormWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 22px 59px 0 59px;

  @media (max-width: ${size.tablet}) {
    margin: 22px 29px 0px 29px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;

    input[type='text'],
    .epr-search {
      width: 400px;
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

      @media (max-width: ${size.tablet}) {
        width: 300px;
      }

      @media (max-width: ${size.mobileL}) {
        width: 200px;
      }
    }

    input[type='submit'] {
      padding: 10px 37px;
      background: ${({ theme }) => theme.BUTTON_BACKGROUND};
      border-radius: 20px;
      margin-bottom: 37px;
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
      }
    }
  }
`;

export const TitleInput = styled.input`
  height: 40px;
  padding: 12px 0px 10px 10px;
`;

export const DescriptionInput = styled.textarea`
  height: 230px;
  padding: 12px 12px 201px 12px;

  @media (max-width: ${size.mobileL}) {
    padding: 12px 0px 120px 10px;
    height: 150px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 22px;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CreateCardCancelButton = styled.button`
  width: 180px;
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

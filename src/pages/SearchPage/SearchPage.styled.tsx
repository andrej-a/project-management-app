import styled from 'styled-components';
import { BoardsWrapper } from '../BoardsPage/BoardsPage.styled';
import { TaskCardStyled } from '../CurrentBoardPage/KanbanArea/TaskCard/TaskCard.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  padding: 0 48px;
  padding-top: 40px;
  height: auto;
  p {
    margin: auto 0;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    font-size: 20px;
    font-weight: 400;
  }
`;

export const AreaWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  ${BoardsWrapper} {
    justify-content: center;
  }
  ${TaskCardStyled} {
    height: auto;
  }
`;

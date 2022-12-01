import styled from 'styled-components';

export const TaskCardStyled = styled.div`
  height: auto;
  width: 300px;
  padding: 31px 33px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${({ theme }) => theme.LIGHT_BACKGROUND};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: ${({ theme }) => theme.TASK_TEXT};
  position: relative;
  cursor: pointer !important;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
`;
export const TaskCardTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  max-width: 226px;
`;
export const TaskCardDescription = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Priority = styled.div`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  border-radius: 100px;
  padding: 5px 15px;
  width: min-content;
  color: ${({ theme }) => theme.TEXT_COLOR};
  &.high {
    background-color: ${({ theme }) => theme.BUTTON_RED};
    border: 2px solid ${({ theme }) => theme.BUTTON_RED};
  }
  &.medium {
    background-color: ${({ theme }) => theme.BUTTON_YELLOW};
    border: 2px solid ${({ theme }) => theme.BUTTON_YELLOW};
  }
  &.low {
    background-color: ${({ theme }) => theme.BUTTON_GREEN};
    border: 2px solid ${({ theme }) => theme.BUTTON_GREEN};
  }
`;

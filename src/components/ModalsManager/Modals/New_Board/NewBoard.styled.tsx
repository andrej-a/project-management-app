import styled from 'styled-components';

export const BoardFrame = styled.div`
  width: auto;
  max-height: 100%;
  padding: 15px;
  background: ${({ theme }) => theme.FRAME_TASK_COLOR};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

export const BoardCard = styled.div`
  width: auto;
  max-height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const LogInTitleWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 38px;
  margin-left: 59px;
`;

export const LogInTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

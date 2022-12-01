import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 100%;
  width: 332px;
  max-width: 74vw;
  form {
    max-width: calc(100% - 70px);
  }
`;
export const ColumnHeader = styled.div`
  max-width: 100%;
  span {
    font-weight: 400;
  }
  display: flex;
  position: relative;
`;
export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;
  max-width: 74vw;
  background-color: ${({ theme }) => theme.FRAME_TASK_COLOR};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  gap: 15px;
  padding: 15px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

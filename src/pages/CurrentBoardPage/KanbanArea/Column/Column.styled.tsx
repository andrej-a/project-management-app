import styled from 'styled-components';
import { store } from '../../../../store/store';
const { FRAME_TASK_COLOR, TASK_TEXT } = store.getState().application_theme.theme;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ColumnHeader = styled.div`
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
    color: ${TASK_TEXT};
  }
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
  background-color: ${FRAME_TASK_COLOR};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  gap: 15px;
  padding: 15px;
  overflow-y: scroll;
  overflow-x: hidden;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

import styled from 'styled-components';

export const KanbanWrapper = styled.div`
  padding-top: 38px;
  padding-bottom: 38px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 54px;
  min-height: 100%;
  /**ПРОКРУТКА */
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
`;

import styled from 'styled-components';

export const KanbanWrapper = styled.div`
  padding-top: 38px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 54px;
  max-height: calc(100vh - 300px);
  /**ПРОКРУТКА */
  overflow-x: scroll;

  &::-webkit-scrollbar {
    overflow: hidden;
    width: 8px;
    height: 8px;
    background: white;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-piece {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    overflow: hidden;
    border-radius: 4px;
    background: #00beb4;
  }
  &::-webkit-scrollbar-corner {
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
  }
  &::-moz-scrollbar {
    overflow: hidden;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-moz-scrollbar-button {
    display: none;
  }
  &::-moz-scrollbar-piece {
    background: rgba(0, 0, 0, 0.2);
  }
  &::-moz-scrollbar-thumb {
    overflow: hidden;
    border-radius: 4px;
    background: #333;
  }
  &::-moz-scrollbar-corner {
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
  }
`;

import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';

export const KanbanWrapper = styled.div`
  display: flex;
  padding: 18px 3.6% 28px 5.55%;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 54px;
  max-height: calc(100vh - 253px);
  /**ПРОКРУТКА */
  overflow-y: hidden;
  overflow-x: scroll;

  @media (max-width: ${size.tablet}) {
    max-width: 100vw;
    padding: max(2%, 4px) 3%;
    max-height: calc(100vh - 260px);
    gap: 20px;
  }
  ::-webkit-scrollbar {
    width: auto;
  }
`;

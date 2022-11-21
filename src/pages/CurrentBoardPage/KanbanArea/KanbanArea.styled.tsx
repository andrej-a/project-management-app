import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';

export const KanbanWrapper = styled.div`
  display: flex;
  padding: 38px 3.6% 38px 5.55%;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 54px;
  /**ПРОКРУТКА */
  overflow-y: hidden;
  overflow-x: scroll;

  @media (max-width: ${size.tablet}) {
    max-width: 100vw;
    padding: 6%;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
`;

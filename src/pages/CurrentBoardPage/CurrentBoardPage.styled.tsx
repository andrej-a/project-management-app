import styled from 'styled-components';
import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: calc(100vh - 150px);
  background: ${({ theme }) => theme.DESK_BACKGROUND};
  display: grid;
  grid-template-columns: auto;
  @media (max-width: ${size.tablet}) {
    max-height: calc(100vh - 220px);
  }
`;

export const InnerWrapper = styled.div`
  padding: 27px 0 0 0;
  max-width: 100vw;
  display: grid;
  grid-template-rows: min-content auto;
  max-height: calc(100vh - 150px);
  @media (max-width: ${size.tablet}) {
    padding: 27px 0;
    max-height: calc(100vh - 220px);
  }
`;

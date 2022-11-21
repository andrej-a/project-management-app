import styled from 'styled-components';
import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.DESK_BACKGROUND};
  display: grid;
  grid-template-columns: auto auto;
  max-height: calc(100vh - 170px);
  min-height: calc(100vh - 170px);
  height: calc(100vh - 170px);
  @media (max-width: ${size.tablet}) {
    max-height: calc(100vh - 190px);
    min-height: calc(100vh - 190px);
    height: calc(100vh - 190px);
  }
`;

export const InnerWrapper = styled.div`
  padding: 27px 3.26% 27px 5.55%;
  max-width: 100vw;
  @media (max-width: ${size.tablet}) {
    max-height: calc(100vh - 190px);
    padding: 27px 0;
  }
`;

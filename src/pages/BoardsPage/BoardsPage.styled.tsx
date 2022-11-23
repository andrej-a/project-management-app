import styled from 'styled-components';
import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  min-width: 100vw;
  margin: 0;
  padding: 0;
  height: auto;
  background: ${({ theme }) => theme.DESK_BACKGROUND};
  display: grid;
  grid-template-rows: min-content auto;
  min-height: calc(100vh - 170px);
  align-items: start;
`;

export const BoardsPanelWrapper = styled.div`
  margin: 71px;
  display: flex;
  min-height: 100%;
  gap: 31px 22px;

  @media screen and (max-width: ${size.laptop}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    max-width: 100%;
    margin: 71px 0;
  }
`;
export const BoardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 31px 22px;
  align-content: flex-start;

  @media screen and (max-width: ${size.laptop}) {
    justify-content: center;
    align-items: center;
  }
`;

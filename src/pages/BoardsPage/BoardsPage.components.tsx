import styled from 'styled-components';
import { size } from '../../constants/screenSizes';
import { store } from '../../store/store';
const { DESK_BACKGROUND } = store.getState().application_theme;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: ${DESK_BACKGROUND};
  display: flex;
  flex-direction: column;
  font-family: 'Libre Franklin';
`;

export const BoardsPanelWrapper = styled.div`
  margin: 71px;
  display: flex;
  min-height: 100%;

  @media screen and (max-width: ${size.laptop}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 71px;
  }
`;
export const BoardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 31px 22px;

  @media screen and (max-width: ${size.laptop}) {
    justify-content: center;
    align-items: center;
  }
`;

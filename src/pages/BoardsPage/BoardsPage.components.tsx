import styled from 'styled-components';
import { store } from '../../store/store';
const { DESK_BACKGROUND } = store.getState().application_theme;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: ${DESK_BACKGROUND};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardsWrapper = styled.div``;

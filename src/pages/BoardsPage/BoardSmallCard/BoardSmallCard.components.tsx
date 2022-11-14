import styled from 'styled-components';
import { store } from '../../../store/store';
const { MAIN_BACKGROUND } = store.getState().application_theme;

export const BoardSmallCardStyled = styled.div`
  width: 332px;
  height: 176px;
  background-color: ${MAIN_BACKGROUND};
`;
export const BoardSmallTitle = styled.h3``;

import styled from 'styled-components';
import { size } from '../../constants/screenSizes';
import { store } from '../../store/store';
const { DESK_BACKGROUND } = store.getState().application_theme.theme;

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  max-height: calc(100vh - 170px);
  min-height: calc(100vh - 170px);
  height: calc(100vh - 170px);
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: auto;
  background: ${DESK_BACKGROUND};
  display: flex;
  flex-direction: column;
  font-family: 'Libre Franklin';
`;

export const InnerWrapper = styled.div`
  max-height: 100%;
  max-width: 100%;
  padding: 27px 3.26% 27px 5.55%;
`;

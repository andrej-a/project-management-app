import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme;

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  height: auto;
  max-height: 934px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

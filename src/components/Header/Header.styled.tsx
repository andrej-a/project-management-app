import styled from 'styled-components';
import { store } from '../../store/store';
const { MAIN_BACKGROUND, TEXT_COLOR } = store.getState().application_theme;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

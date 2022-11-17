import styled from 'styled-components';
import { store } from '../../../store/store';
const { TEXT_COLOR } = store.getState().application_theme;
export const TextWrapper = styled.div`
  padding: 20px;
  padding-bottom: 0;
  text-align: center;
`;

export const TextContent = styled.p`
  color: ${TEXT_COLOR};
  font-size: 30px;
`;

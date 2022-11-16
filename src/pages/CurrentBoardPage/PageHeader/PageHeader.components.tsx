import styled from 'styled-components';
import { store } from '../../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme;

export const PageHeaderStyled = styled.div`
  h2 {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 7px;
    color: ${TEXT_COLOR_DARK};
  }
`;

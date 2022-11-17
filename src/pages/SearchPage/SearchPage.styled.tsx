import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme;
import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  padding: 0 48px;
  padding-top: 40px;
  p {
    margin: auto 0;
    color: ${TEXT_COLOR_DARK};
    font-size: 20px;
    font-weight: bold;
  }
  /* @media (max-width: ${size.mobileL}) {
    padding: 0px 10px;
  } */
`;

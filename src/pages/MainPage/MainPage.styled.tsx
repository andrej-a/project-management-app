import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 48px;
  img {
    position: absolute;
    top: 100px;
    right: 48px;
    width: 42rem;
    height: 32rem;
  }
`;

export const TextInfo = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 200px;
  gap: 10px;
  h1 {
    font-family: 'K2D', sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: ${TEXT_COLOR_DARK};
    width: 650px;
  }
  p {
    font-size: 20px;
    color: ${TEXT_COLOR_DARK};
    line-height: 1.5em;
    font-weight: 500;
    width: 618px;
  }
`;

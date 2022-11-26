import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 80px;
  @media (max-width: ${size.tablet}) {
    padding: 0 20px;
  }
`;
export const Container = styled.div`
  margin: auto 0;
  position: relative;
  margin-top: 10vh;
  img {
    position: absolute;
    top: 80px;
    right: 100px;
    width: 42rem;
    height: 32rem;
  }
  @media (max-width: ${size.laptopL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
    img {
      position: relative;
      top: 0;
      right: 0;
      margin-bottom: 30px;
      z-index: 2;
    }
  }
  @media (max-width: ${size.tablet}) {
    margin-top: 6vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TextInfo = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-family: 'K2D', sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    width: 50%;
  }
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    line-height: 1.5em;
    font-weight: 500;
    width: 50%;
  }
  @media (max-width: ${size.laptopL}) {
    padding: 0px 40px;
    margin-bottom: 40px;
    p {
      width: 100%;
    }
    h1 {
      width: 100%;
    }
  }
  @media (max-width: ${size.laptop}) {
    margin-left: 0px;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 0px 10px;
  }
`;

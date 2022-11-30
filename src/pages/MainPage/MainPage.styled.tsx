import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 80px;
  @media (max-width: ${size.tablet}) {
    padding: 0 20px;
    margin-bottom: 20px;
  }
`;
export const Container = styled.div`
  display: flex;
  margin: auto 0;
  gap: 50px;
  margin-top: 10vh;
  @media (max-width: ${size.laptopM}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
  }
  @media (max-width: ${size.laptop}) {
    margin-top: 5vh;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin-left: 40px;
  h1 {
    font-family: 'K2D', sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    line-height: 1.5em;
    font-weight: 500;
  }
  @media (max-width: ${size.laptopL}) {
    padding: 0px 40px;
    margin-bottom: 40px;
  }
  @media (max-width: ${size.laptop}) {
    margin-left: 0px;
    padding: 0px;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 0px 10px;
  }
`;

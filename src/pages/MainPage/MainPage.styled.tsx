import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 80px;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  gap: 140px;
  @media (max-width: ${size.tablet}) {
    padding: 0 20px;
    margin-bottom: 20px;
  }
  @media (max-width: ${size.laptop}) {
    padding-top: 5vh;
  }
`;
export const Container = styled.div`
  display: flex;
  margin: auto 0;
  gap: 50px;
  @media (max-width: ${size.laptopM}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
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
    gap: 40px;
    padding: 0px 40px;
    margin-bottom: 40px;
  }
  @media (max-width: ${size.laptop}) {
    margin-left: 0px;
    padding: 0px;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 0px;
    gap: 40px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
`;
export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  p {
    text-align: center;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    width: 60%;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5em;
    align-self: center;
  }
  h1 {
    font-size: 34px;
    text-align: center;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  @media (max-width: ${size.laptopM}) {
    width: 100%;
    p {
      width: 90%;
    }
  }
`;
export const AboutSchoolContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;
  p {
    text-align: center;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    width: 40%;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5em;
    align-self: center;
  }
  @media (max-width: ${size.tablet}) {
    justify-content: center;
    flex-direction: column;
    p {
      width: 90%;
    }
  }
`;

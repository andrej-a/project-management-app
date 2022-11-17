import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

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
  @media (max-width: ${size.laptopL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      margin-bottom: 30px;
      z-index: 2;
    }
  }
  @media (max-width: ${size.tablet}) {
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

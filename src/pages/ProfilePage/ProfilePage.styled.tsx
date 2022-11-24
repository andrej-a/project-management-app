import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

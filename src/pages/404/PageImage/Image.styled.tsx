import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';
export const ImageWrapper = styled.div`
  img {
    width: 600px;
    height: 450px;
  }

  @media (max-width: ${size.tablet}) {
    img {
      width: 300px;
      height: 350px;
    }
  }
`;

import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';

export const PageHeaderStyled = styled.div`
  h2 {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 7px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }

  @media (max-width: ${size.tablet}) {
    padding: 0 6%;
  }
`;

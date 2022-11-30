import styled from 'styled-components';
import { size } from '../../constants/screenSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  padding-top: 40px;
  p {
    margin: auto 0;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    font-size: 20px;
    font-weight: 400;
  }
  min-height: calc(100vh - 135px);
  @media (max-width: ${size.tablet}) {
    min-height: calc(100vh - 203px);
  }
`;

export const AreaWrapper = styled.div`
  margin: auto 0;
`;

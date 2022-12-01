import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';

export const PageHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3.6% 0 5.55%;
  max-width: 100vw;
  h2 {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 7px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: ${size.tablet}) {
    padding: 0 6%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

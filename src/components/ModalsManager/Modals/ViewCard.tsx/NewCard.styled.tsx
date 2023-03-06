import styled from 'styled-components';
import { size } from '../../../../constants/screenSizes';

export const NewCardTitleWrapper = styled.div`
  width: clamp(100px, 300px, 80vw);
  max-width: min(100%, 80vw);
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  font-size: 17px;
  line-height: 18px;
  position: relative;
  .description {
    max-width: 100%;
    margin-bottom: 22px;
    font-weight: 400;
    margin: 40px 0;
  }
  .assign {
    margin-bottom: 40px;
    font-weight: 600;
    span {
      font-size: 13px;
      padding-right: 10px;
      font-weight: 400;
    }
  }
`;
export const NewCardTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

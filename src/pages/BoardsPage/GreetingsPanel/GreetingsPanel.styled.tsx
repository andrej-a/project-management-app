import styled from 'styled-components';
import { size } from '../../../constants/screenSizes';

export const GreetingsPanelStyled = styled.div`
  max-width: 93vw;
  box-sizing: border-box;
  min-height: 125px;
  margin: 33px 3.5% 0 3.5%;
  padding: 21px 3.4%;
  background: linear-gradient(
    91.75deg,
    ${({ theme }) => theme.MAIN_BACKGROUND} -9.31%,
    ${({ theme }) => theme.GRADIENT_SECOND_COLOR} 130.93%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GreetingTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.TEXT_COLOR};
`;
export const GreetingMainText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  span {
    font-weight: 700;
  }
`;
export const GreetingSubText = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const GreetingImageBlock = styled.div`
  max-height: 100px;
  @media screen and (max-width: ${size.mobileL}) {
    display: none;
  }
`;

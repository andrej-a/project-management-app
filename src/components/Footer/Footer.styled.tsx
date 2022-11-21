import styled from 'styled-components';

import { size } from '../../constants/screenSizes';

export const FooterWrapper = styled.div`
  width: auto;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5%;
  height: 60px;
  padding: 0px 2.7%;

  p {
    font-size: clamp(13px, 3vw, 16px);
    font-weight: 400;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  .logo {
    svg {
      width: clamp(75px, 7vw, 100%);
    }
  }
  .gitLogo {
    svg {
      width: clamp(15px, 4vw, 100%);
      min-width: 15px;
    }
  }
  @media (max-width: ${size.tablet}) {
    height: 120px;
  }
`;

export const MembersInfo = styled.div`
  display: flex;
  gap: 10%;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    p {
      margin-top: 10px;
    }
  }
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: clamp(13px, 3vw, 16px);
    font-weight: 400;
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    gap: 13px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  @media (max-width: ${size.tablet}) {
    margin-top: 10px;
  }
`;

import styled from 'styled-components';

import { size } from '../../../constants/screenSizes';

export const DivContainerMembers = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 300px;
  background: ${({ theme }) => theme.LIGHT_BACKGROUND};
  box-shadow: 0px 4px 13px rgba(61, 61, 61, 0.13);
  border-radius: 18px;
`;
export const MemberImage = styled.div`
  width: 300px;
  height: 300px;
  align-items: center;
  display: flex;
  padding: 4%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 18px;
  }
`;
export const MemberTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const BlockName = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  p {
    width: auto;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
  svg {
    fill: ${({ theme }) => theme.TEXT_COLOR_DARK};
  }
`;
export const BlockRole = styled.button`
  padding: 0 22px;
  border-radius: 30px;
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  background-color: ${({ theme }) => theme.FRAME_TASK_COLOR};
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  min-width: 120%;
  border: none;
  align-self: center;
  @media (max-width: ${size.tablet}) {
    min-width: auto;
  }
`;

import styled from 'styled-components';
import { store } from '../../store/store';
const { TEXT_COLOR_DARK } = store.getState().application_theme;

export const FooterWrapper = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 66px;
  height: 60px;
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${TEXT_COLOR_DARK};
  }
`;

export const MembersInfo = styled.div`
  display: flex;
  gap: 66px;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${TEXT_COLOR_DARK};
  }
  svg {
    fill: ${TEXT_COLOR_DARK};
  }
`;

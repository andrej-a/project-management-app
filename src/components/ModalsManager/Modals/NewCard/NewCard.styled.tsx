import styled from 'styled-components';

import { store } from '../../../../store/store';

const { TEXT_COLOR_DARK } = store.getState().application_theme;

export const NewCardTitleWrapper = styled.div`
  padding: 34px 0px 0px 41px;
`;
export const NewCardTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${TEXT_COLOR_DARK};
`;

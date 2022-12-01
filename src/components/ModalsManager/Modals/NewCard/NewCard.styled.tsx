import styled from 'styled-components';

export const NewCardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 41px;
`;
export const NewCardTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
`;

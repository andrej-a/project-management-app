import styled from 'styled-components';

export const TextWrapper = styled.div`
  padding: 20px;
  padding-bottom: 0;
  text-align: center;
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  font-size: 30px;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  padding: 0 48px;
  padding-top: 40px;
  p {
    margin: auto 0;
    color: ${({ theme }) => theme.TEXT_COLOR_DARK};
    font-size: 20px;
    font-weight: 400;
  }
`;

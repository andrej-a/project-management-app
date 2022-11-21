import styled from 'styled-components';

export const GoBackButtonWrapper = styled.div`
  padding: 20px;
`;
export const GoBackButton = styled.button`
  width: 136px;
  height: 34px;
  border: 3px solid ${({ theme }) => theme.BUTTON_BORDER_COLOR_DARK};
  color: ${({ theme }) => theme.TEXT_COLOR_DARK};
  font-size: 20px;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.BUTTON_BORDER_COLOR_DARK};
    border: 3px solid transparent;
    color: ${({ theme }) => theme.BUTTON_BORDER_COLOR_LIGHT};
  }
`;

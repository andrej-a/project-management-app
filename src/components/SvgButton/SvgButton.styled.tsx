import styled from 'styled-components';

export const BoardCardBtnStyled = styled.button.attrs((props: { color: string }) => props)`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  padding: 3px;

  svg {
    fill: ${(props) => props.color};
  }

  &:enabled:hover {
    transform: scale(1.2);
  }
`;

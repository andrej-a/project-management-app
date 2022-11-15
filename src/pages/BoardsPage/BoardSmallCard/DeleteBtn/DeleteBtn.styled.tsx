import styled from 'styled-components';

export const DeleteBtnStyled = styled.button.attrs((props: { color: string }) => props)`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  padding: 3px;

  svg {
    fill: ${(props) => props.color};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

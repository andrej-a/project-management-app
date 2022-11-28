import styled from 'styled-components';
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 105;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s ease-in-out;
  background-color: ${({ theme }) => theme.MODAL_BG};
`;

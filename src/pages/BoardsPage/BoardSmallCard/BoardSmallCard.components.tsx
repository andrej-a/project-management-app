import styled from 'styled-components';

export const BoardSmallCardStyled = styled.div`
  height: 176px;
  width: clamp(200px, 332px, 80%);
  padding: 31px 33px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.MAIN_BACKGROUND};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: ${({ theme }) => theme.TEXT_COLOR};
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
`;
export const BoardSmallTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;
export const BoardSmallDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

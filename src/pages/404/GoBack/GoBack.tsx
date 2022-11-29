import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
/* STYLES */
import { GoBackButtonWrapper, GoBackButton } from './GoBack.styled';

export const GoBack = () => {
  const navigate = useNavigate();
  const { backButton } = useAppSelector((state) => {
    return {
      backButton: state.language.lang.noResultPage.backButton,
    };
  });
  return (
    <>
      <GoBackButtonWrapper>
        <GoBackButton onClick={() => navigate(-1)}>{backButton}</GoBackButton>
      </GoBackButtonWrapper>
    </>
  );
};

import { useNavigate } from 'react-router-dom';
/* STYLES */
import { GoBackButtonWrapper, GoBackButton } from './GoBack.components';
/* CONSTANTS */
import { applicationConstants } from '../../../constants/applicationConstants';
const { NO_RESULT_PAGE_BUTTON_TEXT } = applicationConstants;
export const GoBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <GoBackButtonWrapper>
        <GoBackButton onClick={() => navigate(-1)}>{NO_RESULT_PAGE_BUTTON_TEXT}</GoBackButton>
      </GoBackButtonWrapper>
    </>
  );
};

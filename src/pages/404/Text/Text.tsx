/* STYLES */
import { TextWrapper, TextContent } from './Text.components';
/* CONSTANTS */
import { applicationConstants } from '../../../constants/applicationConstants';
const { NO_RESULT_PAGE_MAIN_TEXT } = applicationConstants;
export const Text = () => {
  return (
    <>
      <TextWrapper>
        <TextContent>{NO_RESULT_PAGE_MAIN_TEXT}</TextContent>
      </TextWrapper>
    </>
  );
};

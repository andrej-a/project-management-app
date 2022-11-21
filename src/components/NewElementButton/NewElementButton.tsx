/**COMPONENTS */
import { NewElementButtonWrapper } from './NewElementButton.components';
/**hOOKS */

const NewElementButton = ({
  text,
  handleClick,
}: {
  text: JSX.Element | string;
  handleClick: () => {
    payload: unknown;
    type: 'modals_state/setStatus';
  };
}) => {
  return (
    <NewElementButtonWrapper onClick={handleClick}>
      <div>{text}</div>
    </NewElementButtonWrapper>
  );
};

export default NewElementButton;

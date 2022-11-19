/**COMPONENTS */
import { useAppSelector } from '../../hooks/hooks';
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
    <NewElementButtonWrapper>
      <div>{text}</div>
    </NewElementButtonWrapper>
  );
};

export default NewElementButton;

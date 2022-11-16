/**COMPONENTS */
import { useAppSelector } from '../../hooks/hooks';
import { NewElementButtonWrapper } from './NewElementButton.components';
/**hOOKS */

const NewElementButton = ({ text }: { text: JSX.Element | string }) => {
  return (
    <NewElementButtonWrapper>
      <div>{text}</div>
    </NewElementButtonWrapper>
  );
};

export default NewElementButton;

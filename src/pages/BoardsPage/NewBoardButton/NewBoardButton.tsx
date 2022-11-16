/**COMPONENTS */
import { NewBoardButtonWrapper } from './NewBoardButton.components';
/**hOOKS */
import { useAppSelector } from '../../../hooks/hooks';

const NewBoardButton = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.boardsPage,
    };
  });
  return (
    <NewBoardButtonWrapper>
      <div>
        {dictionary.Create} <br /> {dictionary['New Board']}
      </div>
    </NewBoardButtonWrapper>
  );
};

export default NewBoardButton;

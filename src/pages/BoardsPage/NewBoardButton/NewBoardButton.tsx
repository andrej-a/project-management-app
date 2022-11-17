/**COMPONENTS */
import { NewBoardButtonWrapper } from './NewBoardButton.components';
/**HOOKS */
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { setStatus } from '../../../slices/modalsSlice/modalsSlice';
const NewBoardButton = () => {
  const dispatch = useAppDispatch();
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.boardsPage,
    };
  });
  return (
    <NewBoardButtonWrapper onClick={() => dispatch(setStatus('new_board'))}>
      <div>
        {dictionary.Create} <br /> {dictionary['new Board']}
      </div>
    </NewBoardButtonWrapper>
  );
};

export default NewBoardButton;

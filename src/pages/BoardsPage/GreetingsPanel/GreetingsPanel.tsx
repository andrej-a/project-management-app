/**STYLES */
import {
  GreetingImageBlock,
  GreetingMainText,
  GreetingsPanelStyled,
  GreetingSubText,
  GreetingTextBlock,
} from './GreetingsPanel.components';
import imageHand from '../../../assets/img/boards_page/greetings_hand.png';

import { IBoard } from '../../../models/IBoard';
import { useAppSelector } from '../../../hooks/hooks';
import { getBoardsWord } from '../utils/utils';
/**UTILS */

const GreetingsPanel = ({ userName, boards }: { userName: string; boards: IBoard[] }) => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.boardsPage,
    };
  });
  return (
    <GreetingsPanelStyled>
      <GreetingTextBlock>
        <GreetingMainText>
          {dictionary.Hello} <span>{userName}!</span>
        </GreetingMainText>
        <GreetingSubText>
          {dictionary['You have']} {getBoardsWord(boards.length)} {dictionary['To do']}.
          {!!boards.length && dictionary['Keep up the good work!']}
        </GreetingSubText>
      </GreetingTextBlock>
      <GreetingImageBlock>
        <img src={imageHand} alt="writing hand" />
      </GreetingImageBlock>
    </GreetingsPanelStyled>
  );
};

export default GreetingsPanel;

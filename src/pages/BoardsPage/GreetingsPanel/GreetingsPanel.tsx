/**STYLES */
import {
  GreetingImageBlock,
  GreetingMainText,
  GreetingsPanelStyled,
  GreetingSubText,
  GreetingTextBlock,
} from './GreetingsPanel.styled';
import imageHand from '../../../assets/img/boards_page/greetings_hand.png';

import { IBoard } from '../../../models/IBoard';
import { useAppSelector } from '../../../hooks/hooks';
/**UTILS */

const GreetingsPanel = ({ userName, boards }: { userName: string; boards: IBoard[] }) => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.boardsPage,
    };
  });

  const getBoardsWord = (number: number) => {
    switch (number) {
      case 0:
        return dictionary['Boards (0)'];
      case number === 1 || (number % 10 === 1 && number % 100 !== 11) ? number : true:
        return number + dictionary['Boards (1)'];
      case (number > 1 && number < 5) ||
      (number % 10 > 1 && number % 10 < 5 && (number % 100 < 11 || number % 100 > 20))
        ? number
        : true:
        return number + dictionary['Boards (2-4)'];
      default:
        return number + dictionary['Boards (5+)'];
    }
  };

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

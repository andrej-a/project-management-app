import { store } from '../../../store/store';
const dictionary = store.getState().language.boardsPage;

export function getBoardsWord(number: number) {
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
}

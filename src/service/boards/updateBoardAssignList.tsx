import { store } from '../../store/store';
import { updateBoard } from './updateBoard';

export const updateBoardAssignList = () => {
  const currentBoard = store.getState().board.currentBoard;
  const allTasks = store.getState().task.tasks;

  if (currentBoard)
    updateBoard({
      ...currentBoard,
      users: Array.from(
        new Set(
          allTasks.map((task) => {
            if (!!task.users.length) return task.users[0];
            else return '';
          })
        )
      ),
    });
};

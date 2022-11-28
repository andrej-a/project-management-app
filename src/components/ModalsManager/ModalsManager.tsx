/* STYLES */
import { Overlay } from './ModalsManager.styled';
/* HOOKS */
import { useAppSelector } from '../../hooks/hooks';
/* COMPONENTS */
import { DeleteItem } from './Modals/DeleteItem/DeleteItem';
import { Registration } from './Modals/Registration/Registration';
import { LogIn } from './Modals/LogIn/LogIn';
import { NewBoard } from './Modals/New_Board/NewBoard';
import { NewCard } from './Modals/NewCard/NewCard';
import { NewColumn } from './Modals/NewColumn/NewColumn';
import { ViewCard } from './Modals/ViewCard.tsx/ViewCard';

export const ModalsManager = () => {
  const { modalsState } = useAppSelector((state) => state.modals_state);
  const getModal = (): JSX.Element => {
    switch (modalsState) {
      case 'add_column':
        return (
          <Overlay>
            <NewColumn />
          </Overlay>
        );
      case 'new_card':
        return (
          <Overlay>
            <NewCard />
          </Overlay>
        );
      case 'new_board':
        return (
          <Overlay>
            <NewBoard />
          </Overlay>
        );
      case 'login':
        return (
          <Overlay>
            <LogIn />
          </Overlay>
        );
      case 'registration':
        return (
          <Overlay>
            <Registration />
          </Overlay>
        );
      case 'delete_item':
        return (
          <Overlay>
            <DeleteItem />
          </Overlay>
        );
      case 'update_card':
        return (
          <Overlay>
            <NewCard />
          </Overlay>
        );
      case 'update_board':
        return (
          <Overlay>
            <NewBoard />
          </Overlay>
        );
      case 'view_card':
        return (
          <Overlay>
            <ViewCard />
          </Overlay>
        );
      default:
        return <Overlay style={{ transform: 'translate(-50%, 100%)' }}></Overlay>;
    }
  };
  return <>{getModal()}</>;
};

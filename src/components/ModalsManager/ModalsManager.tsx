import { useEffect } from 'react';
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
import { FetchError } from './Modals/FetchError/FetchError';

export const ModalsManager = () => {
  const { modalsState } = useAppSelector((state) => state.modals_state);
  useEffect(() => {
    document.documentElement.style.overflow = modalsState === 'hidden' ? '' : 'hidden';
  }, [modalsState]);
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
      case 'fetch_error':
        return (
          <Overlay>
            <FetchError />
          </Overlay>
        );
      default:
        return <Overlay style={{ transform: 'translate(-50%, 100%)' }}></Overlay>;
    }
  };
  return <>{getModal()}</>;
};

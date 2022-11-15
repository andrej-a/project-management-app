/* STYLES */
import { Overlay } from './ModalsManager.styled';
/* HOOKS */
import { useAppSelector } from '../../hooks/hooks';
/* COMPONENTS */
import { DeleteItem } from './Modals/DeleteItem/DeleteItem';
import { Registration } from './Modals/Registration/Registration';
import { LogIn } from './Modals/LogIn/LogIn';
export const ModalsManager = () => {
  const { modalsState } = useAppSelector((state) => state.modals_state);
  const getModal = (): JSX.Element => {
    switch (modalsState) {
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
      default:
        return <></>;
    }
  };
  return <>{getModal()}</>;
};

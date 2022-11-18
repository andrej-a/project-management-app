/* STYLES */
import {
  DeleteItemWrapper,
  DeleteItemFrame,
  DeleteItemCard,
  Title,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from './DeleteItem.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';

export const DeleteItem = () => {
  const { title, confirmButton, cancel } = useAppSelector((state) => {
    return {
      title: state.language.lang.deleteItemModal.title,
      confirmButton: state.language.lang.deleteItemModal.confirmButton,
      cancel: state.language.lang.cancel,
    };
  });
  return (
    <>
      <DeleteItemWrapper>
        <DeleteItemFrame>
          <DeleteItemCard>
            <Title>{title} itemValue?</Title>
            <ButtonsWrapper>
              <CancelButton>{cancel}</CancelButton>
              <ConfirmButton>{confirmButton}</ConfirmButton>
            </ButtonsWrapper>
          </DeleteItemCard>
        </DeleteItemFrame>
      </DeleteItemWrapper>
    </>
  );
};

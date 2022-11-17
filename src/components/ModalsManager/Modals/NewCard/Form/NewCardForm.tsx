import { useAppSelector } from '../../../../../hooks/hooks';
/* STYLES */
import {
  FormWrapper,
  LabelWrapper,
  HighPriorityLabel,
  MediumPriorityLabel,
  LowPriorityLabel,
} from './NewCardForm.styled';
/* COMPONENTS */
import { ButtonsWrapper } from '../../New_Board/Form/Form.styled';
import {
  TitleInput,
  DescriptionInput,
  CreateCardCancelButton,
} from '../../New_Board/Form/Form.styled';
export const NewCardForm = () => {
  const { hint, description, priority, addTaskButon, titlePriority, cancel } = useAppSelector(
    (state) => {
      return {
        hint: state.language.createCard.hint,
        description: state.language.createCard.description,
        priority: state.language.createCard.priority,
        addTaskButon: state.language.createCard.addTaskButon,
        titlePriority: state.language.createCard.titlePriority,
        cancel: state.language.cancel,
      };
    }
  );
  return (
    <>
      <FormWrapper>
        <form action="">
          <TitleInput placeholder={hint} type="text" name="title" id="title" />
          <DescriptionInput
            placeholder={description}
            type="text"
            name="description"
            id="description"
          />
          {titlePriority}
          <LabelWrapper>
            <input type="radio" id="high_priority" name="priority" value={priority.high} />
            <HighPriorityLabel htmlFor="high_priority">
              {priority.high.toUpperCase()}
            </HighPriorityLabel>
            <input type="radio" id="medium_priority" name="priority" value={priority.medium} />
            <MediumPriorityLabel htmlFor="medium_priority">
              {priority.medium.toUpperCase()}
            </MediumPriorityLabel>
            <input type="radio" id="low_priority" name="priority" value={priority.low} />
            <LowPriorityLabel htmlFor="low_priority">{priority.low.toUpperCase()}</LowPriorityLabel>
          </LabelWrapper>
          <ButtonsWrapper>
            <CreateCardCancelButton>{cancel}</CreateCardCancelButton>
            <input type="submit" value={addTaskButon} />
          </ButtonsWrapper>
        </form>
      </FormWrapper>
    </>
  );
};

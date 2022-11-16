import { ITask } from '../../../../models/ITask';
/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { TaskCardStyled, TaskCardDescription, TaskCardTitle } from './TaskCard.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
/**HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';

const TaskCard = ({ title, description, _id }: ITask) => {
  const { buttonColor } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.BUTTON_RED,
    };
  });
  return (
    <TaskCardStyled>
      <TaskCardTitle>{title}</TaskCardTitle>
      <TaskCardDescription>{description}</TaskCardDescription>
      <SvgButton
        color={buttonColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
      />
    </TaskCardStyled>
  );
};

export default TaskCard;

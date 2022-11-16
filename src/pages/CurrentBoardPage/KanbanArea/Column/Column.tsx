/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { ColumnHeader, ColumnStyled, ColumnWrapper } from './Column.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
import plusIcon from '../../../../assets/img/plus.svg';
/**HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/**MODELS */
import { IColumn } from '../../../../models/IColumn';
/**COMPONENTS */
import TaskCard from '../TaskCard/TaskCard';

const Column = ({ title, _id }: Partial<IColumn>) => {
  const { tasks, buttonColor } = useAppSelector((state) => {
    return {
      board: state.board.board,
      columns: state.board.columns,
      tasks: state.board.tasks[_id as string] ?? [],
      buttonColor: state.application_theme.TASK_TEXT,
    };
  });
  const taskElements = tasks.map((task) => <TaskCard {...task} key={task._id} />);
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <h3>
          {title} <span>({tasks.length})</span>
        </h3>
        <SvgButton
          color={buttonColor}
          icon={deleteIcon}
          stylish={{ position: 'absolute', right: '30px' }}
        />
        <SvgButton
          color={buttonColor}
          icon={plusIcon}
          size={20}
          stylish={{ position: 'absolute', right: '0', top: '6px' }}
        />
      </ColumnHeader>
      <ColumnStyled>{taskElements}</ColumnStyled>
    </ColumnWrapper>
  );
};

export default Column;

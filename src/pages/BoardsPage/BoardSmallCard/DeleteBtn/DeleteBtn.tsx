import { HandySvg } from 'handy-svg';
/**STYLES */
import deleteIcon from '../../../../assets/img/delete.svg';
import { DeleteBtnStyled } from './DeleteBtn.styled';
/**CONSTANTS */
import { svgDefaultSize } from '../../../../constants/applicationConstants';

const DeleteBtn = ({ color, size }: { color: string; size?: number }) => {
  size = size ?? svgDefaultSize;
  return (
    <DeleteBtnStyled color={color}>
      <HandySvg src={deleteIcon} width={String(size)} height={String(size)} />
    </DeleteBtnStyled>
  );
};

export default DeleteBtn;

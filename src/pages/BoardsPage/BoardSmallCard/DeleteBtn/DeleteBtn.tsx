import { HandySvg } from 'handy-svg';
import deleteIcon from '../../../../assets/img/delete.svg';
import { DeleteBtnStyled } from './DeleteBtn.styled';
const DeleteBtn = ({ color, size }: { color: string; size?: number }) => {
  size = size ?? 32;
  return (
    <DeleteBtnStyled color={color}>
      <HandySvg src={deleteIcon} width={String(size)} height={String(size)} />
    </DeleteBtnStyled>
  );
};

export default DeleteBtn;

import { HandySvg } from 'handy-svg';
/**CONSTANTS */
import { svgDefaultSize } from '../../constants/applicationConstants';
import { BoardCardBtnStyled } from './SvgButton.styled';
import CSS from 'csstype';

const SvgButton = ({
  color,
  icon,
  size,
  stylish,
  handleClick,
  type,
  disabled = false,
}: {
  color: string;
  icon: string;
  size?: number;
  stylish?: CSS.Properties;
  handleClick?:
    | (() => {
        payload: unknown;
        type: 'modals_state/setStatus';
      })
    | (() => void);
  type?: 'submit';
  disabled?: boolean;
}) => {
  size = size ?? svgDefaultSize;
  return (
    <BoardCardBtnStyled
      color={color}
      style={stylish}
      onClick={(e) => {
        e.stopPropagation();
        if (handleClick) handleClick();
      }}
      disabled={disabled}
      type={type ?? 'button'}
    >
      <HandySvg src={icon} width={String(size)} height={String(size)} />
    </BoardCardBtnStyled>
  );
};

export default SvgButton;

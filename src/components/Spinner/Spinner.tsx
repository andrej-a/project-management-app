import { ClockLoader } from 'react-spinners';
import { useAppSelector } from '../../hooks/hooks';
import CSS from 'csstype';

export const Spinner = ({ center }: { center: boolean }) => {
  const { spinnerColor } = useAppSelector((state) => {
    return {
      spinnerColor: state.application_theme.theme.TEXT_COLOR_DARK,
    };
  });
  const style = (
    center
      ? {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      : {}
  ) as CSS.Properties;

  return (
    <div style={style}>
      <ClockLoader color={spinnerColor} />
    </div>
  );
};

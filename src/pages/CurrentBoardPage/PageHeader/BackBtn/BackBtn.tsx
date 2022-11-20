/**COMPONENTS */
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/hooks';
/**hOOKS */
import { BackBtnWrapper } from './BackBtn.components';

const BackBtn = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.currentBoardPage,
    };
  });
  return (
    <BackBtnWrapper>
      <NavLink to="../../boards">
        <div>{dictionary['See all Boards']}</div>
      </NavLink>
    </BackBtnWrapper>
  );
};

export default BackBtn;

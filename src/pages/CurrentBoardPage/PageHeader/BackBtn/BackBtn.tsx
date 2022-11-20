import { NavLink } from 'react-router-dom';
/**COMPONENTS */
import { BackBtnWrapper } from './BackBtn.components';
/**hOOKS */
import { useAppSelector } from '../../../../hooks/hooks';

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

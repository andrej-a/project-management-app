/**COMPONENTS */
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
      <div>{dictionary['See all Boards']}</div>
    </BackBtnWrapper>
  );
};

export default BackBtn;

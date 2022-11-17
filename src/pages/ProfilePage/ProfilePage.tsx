import { useAppSelector } from '../../hooks/hooks';
import { Wrapper } from '../SearchPage/SearchPage.styled';
import notebook from '../../assets/img/noteBook.png';

const ProfilePage = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.mainPage,
    };
  });
  return <Wrapper></Wrapper>;
};

export default ProfilePage;

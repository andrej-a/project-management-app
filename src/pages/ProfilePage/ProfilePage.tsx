import { useAppSelector } from '../../hooks/hooks';

import { Wrapper } from '../SearchPage/SearchPage.styled';

const ProfilePage = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language,
    };
  });
  return <Wrapper></Wrapper>;
};

export default ProfilePage;

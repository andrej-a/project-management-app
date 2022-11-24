import { useAppSelector } from '../../hooks/hooks';
import { EditProfileForm } from './Form/EditProfileForm';
import { Wrapper } from './ProfilePage.styled';
const ProfilePage = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language,
    };
  });
  return (
    <Wrapper>
      <EditProfileForm></EditProfileForm>
    </Wrapper>
  );
};

export default ProfilePage;

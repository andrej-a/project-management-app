import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { EditProfileForm } from './Form/EditProfileForm';
import { Wrapper } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Wrapper>
      <ErrorBoundary>
        <EditProfileForm />
      </ErrorBoundary>
    </Wrapper>
  );
};

export default ProfilePage;

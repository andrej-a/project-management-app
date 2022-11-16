import { useAppSelector } from '../../hooks/hooks';

import { Search } from '../Search/Search';
import { ButtonContainer, HeaderWrapper, SignIn, SignUp } from './Header.styled';
import { NavigationComponent } from './Navigation/Navigation';

export const Header = () => {
  const { isAuthorized } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
    };
  });
  return (
    <HeaderWrapper>
      {isAuthorized && <Search />}
      <h2>TASKBAN</h2>
      {isAuthorized ? (
        <NavigationComponent />
      ) : (
        <ButtonContainer>
          <SignIn>SING IN</SignIn>
          <SignUp>SIGN UP</SignUp>
        </ButtonContainer>
      )}
    </HeaderWrapper>
  );
};

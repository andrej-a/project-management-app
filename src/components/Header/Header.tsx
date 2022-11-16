import { Navigation, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { store } from '../../store/store';
import { Search } from '../Search/Search';
import { ButtonContainer, HeaderWrapper, SignIn, SignUp } from './Header.styled';

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
      <ButtonContainer>
        {isAuthorized ? <SignIn>LOG OUT</SignIn> : <SignIn>SING IN</SignIn>}
        {isAuthorized ? '' : <SignUp>SIGN UP</SignUp>}
      </ButtonContainer>
      {/* {isAuthorized && <Navigation active={isActive} />} */}
    </HeaderWrapper>
  );
};

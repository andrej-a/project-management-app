import { useAppSelector } from '../../hooks/hooks';
import React, { useState } from 'react';
import { Search } from '../Search/Search';
import {
  ButtonContainer,
  HeaderWrapper,
  SignIn,
  SignUp,
  BurgerMenu,
  Container,
} from './Header.styled';
import { NavigationComponent } from './Navigation/Navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthorized, dictionary } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
      dictionary: state.language,
    };
  });
  return (
    <HeaderWrapper className={isMenuOpen ? 'active' : ''}>
      {/* {isAuthorized && <Search />} */}
      <Container>
        <h2>TASKBAN</h2>
        <BurgerMenu
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={isMenuOpen ? 'active' : ''}
        >
          <span />
        </BurgerMenu>
      </Container>

      {isAuthorized ? (
        <NavigationComponent isOpen={isMenuOpen} />
      ) : (
        <ButtonContainer className={isMenuOpen ? 'active' : ''}>
          <SignIn onClick={() => {}}>{dictionary.header.SignIn}</SignIn>
          <SignUp onClick={() => {}}>{dictionary.header.SignUp}</SignUp>
        </ButtonContainer>
      )}
    </HeaderWrapper>
  );
};

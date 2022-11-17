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
import { NavLink } from 'react-router-dom';

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
      <Container>
        <NavLink to="boards">
          <h2>TASKBAN</h2>
        </NavLink>

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

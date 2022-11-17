import { useAppSelector } from '../../hooks/hooks';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
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
  const [scroll, setScroll] = React.useState(0);
  const { isAuthorized, dictionary } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
      dictionary: state.language,
    };
  });

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper
      className={classNames(`${isMenuOpen ? 'active' : ''}`, `${scroll > 80 ? 'changeColor' : ''}`)}
    >
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

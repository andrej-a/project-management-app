import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useAppSelector } from '../../hooks/hooks';
import { NavigationComponent } from './Navigation/Navigation';
import { authorizationSwitch } from '../../slices/userSlice/userSlice';
import { Styles, headerHeight } from '../../constants/applicationConstants';

import {
  ButtonContainer,
  HeaderWrapper,
  SignIn,
  SignUp,
  BurgerMenu,
  Container,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = React.useState(headerHeight.start);
  const { isAuthorized, dictionary } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
      dictionary: state.language.lang,
    };
  });

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButton = (button: string) => {
    switch (button) {
      case dictionary.header.SignIn:
        return dispatch(authorizationSwitch());
      default:
        return button;
    }
  };

  return (
    <HeaderWrapper
      className={classNames(
        `${isMenuOpen ? Styles.ACTIVE : ''}`,
        `${scroll > headerHeight.end ? Styles.CHANGE_COLOR : ''}`
      )}
    >
      <Container>
        <NavLink to="boards">
          <h2>TASKBAN</h2>
        </NavLink>

        <BurgerMenu
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={isMenuOpen ? Styles.ACTIVE : ''}
        >
          <span />
        </BurgerMenu>
      </Container>

      {isAuthorized ? (
        <NavigationComponent isOpen={isMenuOpen} />
      ) : (
        <ButtonContainer
          className={isMenuOpen ? Styles.ACTIVE : ''}
          onClick={(e) => handleButton((e.target as HTMLElement).innerText)}
        >
          <SignIn>{dictionary.header.SignIn}</SignIn>
          <SignUp>{dictionary.header.SignUp}</SignUp>
        </ButtonContainer>
      )}
    </HeaderWrapper>
  );
};

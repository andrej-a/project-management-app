import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { NavigationComponent } from './Navigation/Navigation';
import { Styles, headerHeight } from '../../constants/applicationConstants';
import { HeaderWrapper, BurgerMenu, Container } from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = React.useState(headerHeight.start);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <NavigationComponent
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={(value: boolean) => setIsMenuOpen(value)}
      />
    </HeaderWrapper>
  );
};

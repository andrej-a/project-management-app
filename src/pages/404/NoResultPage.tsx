import React from 'react';
import Lottie from 'lottie-react';
/* STYLES */
import { Wrapper } from './NoResultPage.styled';
import light_notFoundImage from '../../assets/json/404-page_light.json';
import dark_notFoundImage from '../../assets/json/404-page.json';
/* COMPONENTS */
import { GoBack } from './GoBack/GoBack';
import { Text } from './Text/Text';

import { useAppSelector } from '../../hooks/hooks';
import { themeEnum } from '../../constants/localStorage';
export const NoResultPage = () => {
  const { theme } = useAppSelector((state) => {
    return {
      theme: state.application_theme.theme.CURRENT_THEME,
    };
  });
  return (
    <>
      <Wrapper>
        <Lottie
          animationData={theme === themeEnum.DARK ? dark_notFoundImage : light_notFoundImage}
          loop={true}
          style={{ height: '50vh' }}
        />
        <Text />
        <GoBack />
      </Wrapper>
    </>
  );
};

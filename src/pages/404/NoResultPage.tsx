import React from 'react';
/* STYLES */
import { Wrapper } from './NoResultPage.styled';
/* COMPONENTS */
import { GoBack } from './GoBack/GoBack';
import { Text } from './Text/Text';
import { Image } from './PageImage/Image';
export const NoResultPage = () => {
  return (
    <>
      <Wrapper>
        <Image />
        <Text />
        <GoBack />
      </Wrapper>
    </>
  );
};

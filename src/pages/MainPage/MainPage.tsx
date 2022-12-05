import { HandySvg } from 'handy-svg';
import Lottie from 'lottie-react';

import { useAppSelector } from '../../hooks/hooks';
import { themeEnum } from '../../constants/localStorage';

import {
  AboutSchoolContainer,
  Container,
  ContentWrapper,
  TextInfo,
  Wrapper,
} from './MainPage.styled';
import MainImage from '../../assets/json/mainPage.json';
import MainImageDark from '../../assets/json/mainPage_Dark.json';

import TeamMembers from './Members/TeamMembers';
import RSS from '../../assets/svg/rss.svg';

const MainPage = () => {
  const { dictionary, theme } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.mainPage,
      theme: state.application_theme.theme.CURRENT_THEME,
    };
  });
  return (
    <Wrapper>
      <Container>
        <TextInfo>
          <h1>{dictionary.title}</h1>
          <p>{dictionary.description}</p>
        </TextInfo>
        <Lottie
          animationData={theme === themeEnum.DARK ? MainImageDark : MainImage}
          loop={true}
          style={{ width: '80%' }}
        />
      </Container>
      <ContentWrapper>
        <h1>{dictionary.ourTeam}</h1>
        <p>{dictionary.ourTemDiscription}</p>
        <TeamMembers />
      </ContentWrapper>
      <AboutSchoolContainer>
        <p>{dictionary.AboutSchool}</p>
        <HandySvg src={RSS} />
        {/* <img src={} /> */}
      </AboutSchoolContainer>
    </Wrapper>
  );
};

export default MainPage;

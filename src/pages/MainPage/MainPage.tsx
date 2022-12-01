import { useAppSelector } from '../../hooks/hooks';
import { Container, TextInfo, Wrapper } from './MainPage.styled';
import Lottie from 'lottie-react';
import MainImage from '../../assets/json/mainPage.json';
import MainImageDark from '../../assets/json/mainPage_Dark.json';
import { themeEnum } from '../../constants/localStorage';

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
    </Wrapper>
  );
};

export default MainPage;

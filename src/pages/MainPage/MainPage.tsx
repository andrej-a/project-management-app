import { useAppSelector } from '../../hooks/hooks';
import { TextInfo, Wrapper } from './MainPage.styled';
import notebook from '../../assets/img/noteBook.png';

const MainPage = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.mainPage,
    };
  });
  return (
    <Wrapper>
      <TextInfo>
        <h1>{dictionary.title}</h1>
        <p>{dictionary.description}</p>
      </TextInfo>
      <img src={notebook} alt="notebook img" />
    </Wrapper>
  );
};

export default MainPage;

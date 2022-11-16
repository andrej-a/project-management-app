import { useAppSelector } from '../../../hooks/hooks';

import plus from '../../../assets/svg/plus.svg';
import arrow from '../../../assets/svg/arrow.svg';
import { HandySvg } from 'handy-svg';
import {
  LogOut,
  User,
  NewBoardButton,
  Wrapper,
  Switch,
  UserAvatar,
  OptionsContainer,
  TextContainer,
} from './Navigation.styled';

export const NavigationComponent = () => {
  const { user, dictionary } = useAppSelector((state) => {
    return {
      user: state.user,
      dictionary: state.language,
    };
  });

  const switchOptions = [
    {
      id: 111,
      title: dictionary.header.Theme,
      options: [dictionary.header.ThemeDefault, dictionary.header.ThemeDark],
    },
    {
      id: 112,
      title: dictionary.header.EN,
      options: [dictionary.header.EN, dictionary.header.RU],
    },
  ];

  const firstNamesLetter = user.name ? user.name[0].toUpperCase() : null;

  return (
    <Wrapper>
      <NewBoardButton>
        <HandySvg src={plus} width="28" height="28" />
        <p>{dictionary.boardsPage['New Board']}</p>
      </NewBoardButton>
      {switchOptions.map((item) => {
        return (
          <Switch key={item.id}>
            <TextContainer>
              <p>{item.title}</p>
              <HandySvg src={arrow} width="32" height="32" />
            </TextContainer>
            <OptionsContainer>
              {item.options.map((option, index) => {
                return <li key={index}>{option}</li>;
              })}
            </OptionsContainer>
          </Switch>
        );
      })}

      <LogOut>{dictionary.header.LogOut}</LogOut>
      <User>
        <p>{user.name}</p>
        <UserAvatar>{firstNamesLetter}</UserAvatar>
      </User>
    </Wrapper>
  );
};

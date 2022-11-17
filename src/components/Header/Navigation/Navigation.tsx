import { useAppSelector } from '../../../hooks/hooks';

import plus from '../../../assets/svg/plus.svg';
import arrow from '../../../assets/svg/arrow.svg';
import searchIcon from '../../../assets/svg/search1.svg';
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
  ItemContainer,
} from './Navigation.styled';
import { NavLink } from 'react-router-dom';

type props = {
  isOpen: boolean;
};

export const NavigationComponent = ({ isOpen }: props) => {
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
    <Wrapper className={isOpen ? 'active' : ''}>
      <NavLink to="search">
        <ItemContainer>
          <HandySvg src={searchIcon} width="24" height="24" />
          <p>{dictionary.header.Search}</p>
        </ItemContainer>
      </NavLink>

      <NewBoardButton onClick={() => {}}>
        <HandySvg src={plus} width="22" height="22" />
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

      <NavLink to="profile">
        <User>
          <p>{dictionary.profile.EditProfile}</p>
          <UserAvatar>{firstNamesLetter}</UserAvatar>
        </User>
      </NavLink>
    </Wrapper>
  );
};

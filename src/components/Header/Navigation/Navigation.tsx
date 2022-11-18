import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandySvg } from 'handy-svg';

import { useAppSelector } from '../../../hooks/hooks';
import { Styles, SvgSizes } from '../../../constants/applicationConstants';

import { themeChange } from '../../../slices/themeSlice/themeSlice';
import { DarkTheme, Default } from '../../../slices/themeSlice/initialState';
import { langChange } from '../../../slices/languageSlice/languageSlice';
import { EnglishState, RussianState } from '../../../slices/languageSlice/initialState';
import { authorizationSwitch } from '../../../slices/userSlice/userSlice';

import plus from '../../../assets/svg/plus.svg';
import arrow from '../../../assets/svg/arrow.svg';
import searchIcon from '../../../assets/svg/search1.svg';
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

type props = {
  isOpen: boolean;
};

export const NavigationComponent = ({ isOpen }: props) => {
  const dispatch = useDispatch();
  const { user, dictionary } = useAppSelector((state) => {
    return {
      user: state.user,
      dictionary: state.language.lang,
    };
  });
  const firstNamesLetter = user.name ? user.name[0].toUpperCase() : null;
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

  const handleOption = (option: string) => {
    switch (option) {
      case dictionary.header.EN:
        return dispatch(langChange(EnglishState));
      case dictionary.header.RU:
        return dispatch(langChange(RussianState));
      case dictionary.header.ThemeDefault:
        return dispatch(themeChange(Default));
      case dictionary.header.ThemeDark:
        return dispatch(themeChange(DarkTheme));
      default:
        return option;
    }
  };

  return (
    <Wrapper className={isOpen ? Styles.ACTIVE : ''}>
      <NavLink to="search">
        <ItemContainer>
          <HandySvg src={searchIcon} width={SvgSizes.SMALL} height={SvgSizes.SMALL} />
          <p>{dictionary.header.Search}</p>
        </ItemContainer>
      </NavLink>

      <NewBoardButton onClick={() => {}}>
        <HandySvg src={plus} width={SvgSizes.SMALL} height={SvgSizes.SMALL} />
        <p>{dictionary.boardsPage['New Board']}</p>
      </NewBoardButton>

      {switchOptions.map((item) => {
        return (
          <Switch key={item.id}>
            <TextContainer>
              <p>{item.title}</p>
              <HandySvg src={arrow} width={SvgSizes.MEDIUM} height={SvgSizes.MEDIUM} />
            </TextContainer>
            <OptionsContainer onClick={(e) => handleOption((e.target as HTMLElement).innerText)}>
              {item.options.map((option, index) => {
                return <li key={index}>{option}</li>;
              })}
            </OptionsContainer>
          </Switch>
        );
      })}

      <LogOut onClick={() => dispatch(authorizationSwitch())}>{dictionary.header.LogOut}</LogOut>

      <NavLink to="profile">
        <User>
          <p>{dictionary.profile.EditProfile}</p>
          <UserAvatar>{firstNamesLetter}</UserAvatar>
        </User>
      </NavLink>
    </Wrapper>
  );
};

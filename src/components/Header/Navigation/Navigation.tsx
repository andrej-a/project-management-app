import { NavLink } from 'react-router-dom';
import { HandySvg } from 'handy-svg';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { Styles, SvgSizes } from '../../../constants/applicationConstants';

import { langChange } from '../../../slices/languageSlice/languageSlice';
import { EnglishState, RussianState } from '../../../slices/languageSlice/initialState';
import { authorizationSwitch } from '../../../slices/userSlice/userSlice';

import { setStatus } from '../../../slices/modalsSlice/modalsSlice';

import { getCookie } from '../../../utils/cookie/getCookie';
import { deleteCookie } from '../../../utils/cookie/deleteCookie';

import plus from '../../../assets/svg/plus.svg';
import arrow from '../../../assets/svg/arrow.svg';
import searchIcon from '../../../assets/svg/search.svg';
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
import { langEnum, localStorageEnum, themeEnum } from '../../../constants/localStorage';
import { updateTheme } from '../../../utils/updateTheme';
import { updateLang } from '../../../utils/updateLang';

type props = {
  isOpen: boolean;
};

export const NavigationComponent = ({ isOpen }: props) => {
  const dispatch = useAppDispatch();
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
        updateLang(dispatch, langEnum.EN);
        break;
      case dictionary.header.RU:
        updateLang(dispatch, langEnum.RU);
        break;
      case dictionary.header.ThemeDefault:
        updateTheme(dispatch, themeEnum.DEFAULT);
        break;
      case dictionary.header.ThemeDark:
        updateTheme(dispatch, themeEnum.DARK);
        break;
      default:
        return option;
    }
  };

  return (
    <Wrapper className={isOpen ? Styles.ACTIVE : ''}>
      <NavLink to="search">
        <ItemContainer>
          <HandySvg src={searchIcon} width="26" height="26" />
          <p>{dictionary.header.Search}</p>
        </ItemContainer>
      </NavLink>

      <NewBoardButton onClick={() => dispatch(setStatus('new_board'))}>
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

      <LogOut
        onClick={() => {
          dispatch(authorizationSwitch());
          deleteCookie(getCookie('TASKBAN_USER_TOKEN') as string);
        }}
      >
        {dictionary.header.LogOut}
      </LogOut>

      <NavLink to="profile">
        <User>
          <p>{dictionary.profile.EditProfile}</p>
          <UserAvatar>{firstNamesLetter}</UserAvatar>
        </User>
      </NavLink>
    </Wrapper>
  );
};

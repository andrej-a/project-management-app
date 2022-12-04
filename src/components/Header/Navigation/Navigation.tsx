import { NavLink } from 'react-router-dom';
import { HandySvg } from 'handy-svg';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { localData, Styles, SvgSizes } from '../../../constants/applicationConstants';

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
  GoToMainPage,
} from './Navigation.styled';
import { ButtonContainer, SignIn, SignUp } from '../Header.styled';

import { langEnum, localStorageEnum, themeEnum } from '../../../constants/localStorage';
import { updateTheme } from '../../../utils/updateTheme';
import { updateLang } from '../../../utils/updateLang';
import { deleteValueFromLocalStorage } from '../../../utils/deleteValueFromLocalStorage';

type props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const NavigationComponent = ({ isMenuOpen, setIsMenuOpen }: props) => {
  const dispatch = useAppDispatch();
  const { user, dictionary, isAuthorized } = useAppSelector((state) => {
    return {
      user: state.user,
      dictionary: state.language.lang,
      isAuthorized: state.user.isAuthorized,
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
      title:
        dictionary.header[
          (localStorage.getItem(localStorageEnum.LANG)?.toUpperCase() as 'EN' | 'RU') ?? 'EN'
        ],
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

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper className={isMenuOpen ? Styles.ACTIVE : ''}>
      {isAuthorized && (
        <>
          <NavLink to="search" onClick={closeMenu}>
            <ItemContainer>
              <HandySvg src={searchIcon} width="26" height="26" />
              <p>{dictionary.header.Search}</p>
            </ItemContainer>
          </NavLink>

          <NewBoardButton
            onClick={() => {
              closeMenu();
              dispatch(setStatus('new_board'));
            }}
          >
            <HandySvg src={plus} width={SvgSizes.SMALL} height={SvgSizes.SMALL} />
            <p>{dictionary.boardsPage['New Board']}</p>
          </NewBoardButton>
        </>
      )}

      {switchOptions.map((item) => {
        return (
          <Switch key={item.id}>
            <TextContainer>
              <p>{item.title}</p>
              <HandySvg src={arrow} width={SvgSizes.MEDIUM} height={SvgSizes.MEDIUM} />
            </TextContainer>
            <OptionsContainer onClick={(e) => handleOption((e.target as HTMLElement).innerText)}>
              {item.options.map((option, index) => {
                return (
                  <li key={index} onClick={closeMenu}>
                    {option}
                  </li>
                );
              })}
            </OptionsContainer>
          </Switch>
        );
      })}
      {isAuthorized ? (
        <>
          <NavLink to="boards" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GoToMainPage>{dictionary.header.GoToMain}</GoToMainPage>
          </NavLink>

          <LogOut
            onClick={() => {
              closeMenu();
              dispatch(authorizationSwitch());
              deleteCookie(getCookie('TASKBAN_USER_TOKEN') as string);
              deleteValueFromLocalStorage(localData);
            }}
          >
            {dictionary.header.LogOut}
          </LogOut>

          <NavLink to="profile" onClick={closeMenu}>
            <User>
              <p>{dictionary.profile.EditProfile}</p>
              <UserAvatar>{firstNamesLetter}</UserAvatar>
            </User>
          </NavLink>
        </>
      ) : (
        <ButtonContainer className={isMenuOpen ? Styles.ACTIVE : ''} onClick={closeMenu}>
          <SignIn onClick={() => dispatch(setStatus('login'))}>{dictionary.header.SignIn}</SignIn>
          <SignUp onClick={() => dispatch(setStatus('registration'))}>
            {dictionary.header.SignUp}
          </SignUp>
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

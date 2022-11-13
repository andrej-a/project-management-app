import { createGlobalStyle } from 'styled-components';
import { store } from './store/store';
const { DESK_BACKGROUND } = store.getState().application_theme;

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  ol li,
  ul li {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

#root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
body {
    margin: 0;
    font-family: 'Libre Franklin', sans-serif;
    background-color: ${DESK_BACKGROUND};
    width: 100%;
  }
`;

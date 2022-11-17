import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { store } from './store/store';
const { DESK_BACKGROUND, FRAME_TASK_COLOR, TEXT_COLOR } = store.getState().application_theme;

export default createGlobalStyle`
${normalize}
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
    background: ${DESK_BACKGROUND};

    font-family: 'Libre Franklin', sans-serif;
    background-color: ${DESK_BACKGROUND};
    width: 100%;
    &::-webkit-scrollbar {
    background-color: ${FRAME_TASK_COLOR};
    width: 14px;
    
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-clip: content-box;
    background-color: ${TEXT_COLOR}; 
    border: 4px solid ${FRAME_TASK_COLOR};
  }
  }
`;

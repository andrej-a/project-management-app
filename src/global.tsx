import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ITheme_Interface } from './models/theme_interface';

type GlobalThemeProps = {
  theme: ITheme_Interface;
};

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
    display: grid;
    grid-template-rows: min-content auto min-content;
    justify-items: center;
    min-height: 97vh;

}
body {
    margin: 0;
    max-height: min-content;
    background: ${({ theme }: GlobalThemeProps) => theme.DESK_BACKGROUND};

    font-family: 'Libre Franklin', sans-serif;
    background-color: ${({ theme }: GlobalThemeProps) => theme.DESK_BACKGROUND};
    width: 100%;
    &::-webkit-scrollbar {
    background-color: ${({ theme }: GlobalThemeProps) => theme.FRAME_TASK_COLOR};
    width: 14px;
      background-color:${({ theme }: GlobalThemeProps) => theme.FRAME_TASK_COLOR};
    };
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-clip: content-box;
    background-color: ${({ theme }: GlobalThemeProps) => theme.TEXT_COLOR}; 
    border: 4px solid ${({ theme }: GlobalThemeProps) => theme.FRAME_TASK_COLOR};
  }
  
`;

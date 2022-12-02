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
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.LIGHT_BACKGROUND} inset !important;
    border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
    -webkit-text-fill-color: ${({ theme }) => theme.TEXT_COLOR_DARK};
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

import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ITheme_Interface } from './models/theme_interface';

type GlobalThemeProps = {
  theme: ITheme_Interface;
};

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

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.LIGHT_BACKGROUND} inset !important;
    border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR_LIGHT};
    -webkit-text-fill-color: ${({ theme }) => theme.TEXT_COLOR_DARK};
}
:root{
  svg{
    display: block !important;
  }
}
body {
    background: ${({ theme }: GlobalThemeProps) => theme.DESK_BACKGROUND};
    transition: all 0.5s ease-in-out;
    font-family: 'Libre Franklin', sans-serif;
    background-color: ${({ theme }: GlobalThemeProps) => theme.DESK_BACKGROUND};
    width: 100%;
    &::-webkit-scrollbar {
      background-color: ${({ theme }: GlobalThemeProps) => theme.FRAME_TASK_COLOR};
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
    border: 5px solid ${({ theme }: GlobalThemeProps) => theme.FRAME_TASK_COLOR};
  }
  svg:not(:root){
    display: none;
  }
  
`;

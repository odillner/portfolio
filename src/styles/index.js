import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    scrollbar-width: none
    box-sizing: border-box
  }
  body {
    margin: 0;
    background-color: var(--main-bg-color);
  }
`

const DarkTheme = createGlobalStyle`
    * {
        --main-bg-color: #222;
        --alt-bg-color: #181818;
        --main-accent-color: "#1abc9c";
        --main-icon-color: "#9E9E9E";
        --main-text-color: black;
    }
`
const LightTheme = createGlobalStyle`
    * {
        --main-bg-color: white;
        --alt-bg-color: white;
        --main-accent-color: "#1abc9c";
        --main-icon-color: "#9E9E9E";    
        --main-text-color: black;
    }
`

export const Themes = [
    DarkTheme,
    LightTheme
]

export default GlobalStyles
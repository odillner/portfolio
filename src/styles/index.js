import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    scrollbar-width: none;
    box-sizing: border-box;
    font-family: open sans,sans-serif;
    font-color: white;
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
        --main-accent-color: #1abc9c;
        --main-icon-color: #9E9E9E;
        --main-text-color: black;
    }
`
const LightTheme = createGlobalStyle`
    * {
        --main-bg-color: #909590;
        --alt-bg-color: #474A48;
        --main-accent-color: #9AE19D;
        --main-icon-color: #9E9E9E;    
        --main-text-color: black;
    }
`
const CustomTheme = createGlobalStyle`
    * {
        --main-bg-color: #909590;
        --alt-bg-color: #474A48;
        --main-accent-color: #9AE19D;
        --main-icon-color: #9E9E9E;    
        --main-text-color: black;
    }
`

export const Themes = [
    {key: 0, obj: DarkTheme, name: "Dark Theme"},
    {key: 1, obj: LightTheme, name: "Light Theme"},
    {key: 2, obj: CustomTheme, name: "Custom Theme"},
]

export default GlobalStyles
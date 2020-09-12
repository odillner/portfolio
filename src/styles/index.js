import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'ms_sans_serif';
    background-color: #1abc9c;
  }
  * {
    scrollbar-width: none
    box-sizing: border-box
  }
  body {
    margin: 0;
  }
`

export default GlobalStyles
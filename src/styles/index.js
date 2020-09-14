import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    scrollbar-width: none
    box-sizing: border-box
  }
  body {
    margin: 0;
    background-color: #1abc9c;
  }
`

export default GlobalStyles
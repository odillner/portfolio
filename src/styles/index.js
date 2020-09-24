import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`    
    * {
        scrollbar-width: none;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: var(--main-bg-color);
    }
 
`

export default GlobalStyles
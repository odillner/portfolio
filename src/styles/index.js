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
 
    @keyframes banner0 {
        0% {
            fill: var(--main-accent-color);
        }
        50% {
            fill: var(--alt-accent-color);
        }
        100 {
            fill: var(--main-accent-color);
        }
    }
    
    @keyframes banner1 {
        0% {
            fill: var(--alt-accent-color);
        }
        50% {
            fill: var(--main-accent-color);
        }
        100 {
            fill: var(--alt-accent-color);
        }
    }
`

export default GlobalStyles
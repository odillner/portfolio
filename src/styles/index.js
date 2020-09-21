import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    scrollbar-width: none;
    box-sizing: border-box;
    font-family: sans-serif;
    font-color: white;
  }

  body {
    margin: 0;
    background-color: var(--main-bg-color);
  }
  
  .react-resizable {
    position: relative;
    }
.react-resizable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
  background-position: bottom right;
  padding: 0 3px 3px 0;
}
.react-resizable-handle-sw {
  bottom: 0;
  left: 0;
  cursor: sw-resize;
  transform: rotate(90deg);
}
.react-resizable-handle-se {
  bottom: 0;
  right: 0;
  cursor: se-resize;
}
.react-resizable-handle-nw {
  top: 0;
  left: 0;
  cursor: nw-resize;
  transform: rotate(180deg);
}
.react-resizable-handle-ne {
  top: 0;
  right: 0;
  cursor: ne-resize;
  transform: rotate(270deg);
}
.react-resizable-handle-w,
.react-resizable-handle-e {
  top: 50%;
  margin-top: -10px;
  cursor: ew-resize;
}
.react-resizable-handle-w {
  left: 0;
  transform: rotate(135deg);
}
.react-resizable-handle-e {
  right: 0;
  transform: rotate(315deg);
}
.react-resizable-handle-n,
.react-resizable-handle-s {
  left: 50%;
  margin-left: -10px;
  cursor: ns-resize;
}
.react-resizable-handle-n {
  top: 0;
  transform: rotate(225deg);
}
.react-resizable-handle-s {
  bottom: 0;
  transform: rotate(45deg);
}
`

const DarkTheme = createGlobalStyle`
    * {
        --main-bg-color: #222;
        --alt-bg-color: #181818;
        --main-accent-color: #1abc9c;
        --alt-accent-color: purple;
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
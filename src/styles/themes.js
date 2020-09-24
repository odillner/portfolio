import {createGlobalStyle} from "styled-components"

const DarkTheme = [
    {
        name: "--main-bg-color",
        value: "#222"
    },
    {
        name: "--alt-bg-color",
        value: "#181818"
    },
    {
        name: "--main-accent-color",
        value: "#48D1CC"
    },
    {
        name: "--alt-accent-color",
        value: "#800080"
    },
    {
        name: "--main-icon-color",
        value: "#9E9E9E"
    }
]

const LightTheme = [
    {
        name: "--main-bg-color",
        value: "white"
    },
    {
        name: "--alt-bg-color",
        value: "grey"
    },
    {
        name: "--main-accent-color",
        value: "green"
    },
    {
        name: "--alt-accent-color",
        value: "red"
    },
    {
        name: "--main-icon-color",
        value: "#9E9E9E"
    }
]

const CustomTheme = [
    {
        name: "--main-bg-color",
        value: "#222"
    },
    {
        name: "--alt-bg-color",
        value: "#181818"
    },
    {
        name: "--main-accent-color",
        value: "#48D1CC"
    },
    {
        name: "--alt-accent-color",
        value: "#800080"
    },
    {
        name: "--main-icon-color",
        value: "#9E9E9E"
    }
]

const themeToComponent = (theme) => {
    return createGlobalStyle`
    * {
    ${theme.map(item => {
        return `${item.name}: ${item.value};`
    })}
    }
    `
}

const Themes = [
    {key: 0, obj: DarkTheme, component: themeToComponent(DarkTheme), name: "Dark Theme"},
    {key: 1, obj: LightTheme, component: themeToComponent(LightTheme), name: "Light Theme"},
    {key: 2, obj: CustomTheme, component: themeToComponent(LightTheme), name: "Custom Theme"},
]

export default Themes
import Themes from "../styles/themes"

const initialState = Themes[0].obj

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
    case "UPDATE_THEME": {
        const newItem = action.data
        return state.map(item => (item.name === newItem.name) ? newItem : item)
    }
    default: return state
    }
}

export const updateTheme = (name, newValue) => {
    const newItem = {
        name: name,
        value: newValue
    }
    return {
        type: "UPDATE_THEME",
        data: newItem
    }
}

export default themeReducer
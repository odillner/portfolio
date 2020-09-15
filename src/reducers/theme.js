const themeReducer = (state = 0, action) => {
    switch (action.type) {
    case 'TOGGLE_THEME': {
        return 1 - state
    }
    default: return state
    }
}

export const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    }
}

export default themeReducer
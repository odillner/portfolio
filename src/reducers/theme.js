const themeReducer = (state = 0, action) => {
    switch (action.type) {
    case "CHANGE_THEME": {
        return action.data
    }
    default: return state
    }
}

export const changeTheme = (themeID) => {
    return {
        type: "CHANGE_THEME",
        data: themeID
    }
}

export default themeReducer
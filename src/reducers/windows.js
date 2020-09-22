import _ from "lodash"

const initialState = {
    current: 0,
    last: 0,
    storageChecked: false,
    items: []
}

const updateLocalStorage = (state) => {
    if (state.storageChecked) {
        window.localStorage.setItem("windows", JSON.stringify(state))
    }
}

/* TODO: fix this mess */
const windowReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_WINDOW": {
        const newItem = action.data

        const identical = state.items.find(item => {
            if (item.type === newItem.type) {
                if (!item.initialState) {
                    return true
                }
                if (_.isEqual(item.initialState, newItem.initialState)) {
                    return true
                }
            }
        })

        if (identical) {
            if (!state.storageChecked) {
                /* if item has been created before localstorage has been checked replace it with item from localstorage*/
                const newState = {
                    ...state,
                    current: newItem.id,
                    last: newItem.id,
                    items: state.items.map(item => (item.id === identical.id) ? newItem : item)
                }

                return newState
            } else if (identical.minimized) {
                /* if item already exists and is minimized maximize it */
                identical.minimized = false

                const newState = {
                    ...state,
                    current: newItem.id,
                    last: newItem.id,
                    items: state.items.map(item => (item.id === identical.id) ? identical : item)
                }

                return newState
            }

            return state
        }

        const newState = {
            ...state,
            current: newItem.id,
            last: newItem.id,
            items: state.items.concat(newItem)
        }


        updateLocalStorage(newState)
        return newState
    }
    case "CLOSE_WINDOW": {
        const newState = {
            ...state,
            items: state.items.filter(item => item.id !== action.data)
        }

        updateLocalStorage(newState)
        return newState
    }
    case "UPDATE_WINDOW": {
        const newItem = action.data
        const newState = {
            ...state,
            items: state.items.map(item => (item.id === newItem.id) ? newItem : item)
        }

        updateLocalStorage(newState)

        return newState
    }
    case "SET_CURRENT_WINDOW": {
        const newState = {
            ...state,
            current: action.data,
        }
        return newState
    }
    case "RESET_CURRENT_WINDOW": {
        const newState = {
            ...state,
            current: null,
        }
        return newState
    }
    case "INIT_WINDOWS": {
        const newState = {
            ...state,
            storageChecked: true
        }

        return newState
    }
    case "RESET_WINDOWS": {
        return []
    }
    default: return state
    }
}

export const initWindows = () => {
    const initialState = JSON.parse(window.localStorage.getItem("windows"))

    return dispatch => {
        if (initialState) {
            if (initialState.items) {
                initialState.items.map(item => {
                    dispatch ({
                        type: "ADD_WINDOW",
                        data: item
                    })
                })
            }
        }

        dispatch ({type: "INIT_WINDOWS"})
    }
}

/*TODO: generalize update helpers */
export const addWindow = (type, initialState, x, y) => {
    const newWindow = {
        type,
        initialState,
        x: (x) ? x : 100,
        y: (y) ? y : 50,
        id: Math.floor(Math.random()*10000),
        minimized: false
    }
    return {
        type: "ADD_WINDOW",
        data: newWindow
    }
}

export const updateWindowPosition = (item, x, y) => {
    const newWindow = {
        ...item,
        x,
        y,
    }
    return {
        type: "UPDATE_WINDOW",
        data: newWindow
    }
}

export const minimizeWindow = (item) => {
    const newWindow = {
        ...item,
        minimized: true
    }
    return {
        type: "UPDATE_WINDOW",
        data: newWindow
    }
}

export const maximizeWindow = (item) => {
    const newWindow = {
        ...item,
        minimized: false
    }

    return dispatch => {
        dispatch ({
            type: "UPDATE_WINDOW",
            data: newWindow
        })

        dispatch ({
            type: "SET_CURRENT_WINDOW",
            data: newWindow.id
        })
    }
}


export const closeWindow = (id) => {
    return {
        type: "CLOSE_WINDOW",
        data: id
    }
}

export const selectWindow = (item) => {

    return {
        type: "SET_CURRENT_WINDOW",
        data: item.id
    }
}

export const resetSelected = () => {
    return {
        type: "RESET_CURRENT_WINDOW",
    }
}

export default windowReducer
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import windowReducer from "./reducers/windows"
import themeReducer from "./reducers/theme"

const reducer = combineReducers({
    windows: windowReducer,
    theme: themeReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
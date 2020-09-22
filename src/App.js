import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"

import {GlobalStyles, Themes} from "./styles/"
import WindowRenderer from "./windows/WindowRenderer"
import Routing from "./Routing"
import {initWindows} from "./reducers/windows"
import Background from "./components/Background"

function App() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        dispatch(initWindows())
    }, [])

    const CurrentTheme = Themes[theme].obj

    return (
        <>
            <CurrentTheme/>
            <GlobalStyles/>

            <Routing/>
            <Sidebar/>
            <Footer/>
            <WindowRenderer/>
            <Background/>
        </>
    )
}

export default App

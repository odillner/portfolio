import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"

import GlobalStyles from "./styles/"
import Themes from "./styles/themes"
import WindowRenderer from "./windows/WindowRenderer"
import Routing from "./Routing"
import {initWindows} from "./reducers/windows"
import Background from "./components/Background"
import Header from "./components/Header/Header"
import ThemeWrapper from "./components/ThemeWrapper"

function App() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        dispatch(initWindows())
    }, [])

    const CurrentTheme = Themes[theme].component

    return (
        <>
            <CurrentTheme/>
            <GlobalStyles/>

            <WindowRenderer/>
            <Routing/>

            <Header/>
            <Sidebar/>
            <ThemeWrapper/>
            <Footer/>
            <Background/>
        </>
    )
}

export default App

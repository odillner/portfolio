import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"

import GlobalStyles from "./styles/"
import WindowRenderer from "./windows/WindowRenderer"
import Routing from "./Routing"
import {initWindows} from "./reducers/windows"
import Background from "./components/Background"
import Header from "./components/Header/Header"
import ThemeCustomizer from "./components/ThemeCustomizer"
import {CurrentTheme} from "./styles/themes"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initWindows())
    }, [])

    return (
        <>
            <CurrentTheme/>
            <GlobalStyles/>

            <WindowRenderer/>
            <Routing/>
            <ThemeCustomizer/>
            <Header/>
            <Sidebar/>
            <Footer/>
            <Background/>
        </>
    )
}

export default App

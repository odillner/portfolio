import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"

import {GlobalStyles, Themes} from "./styles/"
import WindowRenderer from "./windows/WindowRenderer"
import Routing from "./Routing"
import {initWindows} from "./reducers/windows"
import Background from "./components/Background"
import RightSidebar from "./components/Sidebar/RightSideBar"
import Header from "./components/Header/Header"

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

            <WindowRenderer/>
            <Routing/>

            <Header/>
            <Sidebar/>
            <Footer/>
            <Background/>
        </>
    )
}

export default App

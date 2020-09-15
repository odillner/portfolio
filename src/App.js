import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import {GlobalStyles, Themes} from './styles/'
import WindowRenderer from './windows/WindowRenderer'
import Routing from './Routing'
import {initWindows} from './reducers/windows'

function App() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        dispatch(initWindows())
    }, [])

    const CurrentTheme = Themes[theme]

    return (
        <>
            <CurrentTheme/>
            <GlobalStyles/>

            <Routing/>
            <Sidebar/>
            <Footer/>
            <WindowRenderer/>
        </>
    )
}

export default App

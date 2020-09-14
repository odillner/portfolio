import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import GlobalStyles from './styles/'
import WindowRenderer from './windows/WindowRenderer'
import Routing from './Routing'
import {initWindows, addWindow} from './reducers/windows'


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initWindows())
    }, [])

    return (
        <>
            <Routing/>
            <GlobalStyles/>
            <Sidebar/>
            <Footer/>
            <WindowRenderer/>
        </>
    )
}

export default App

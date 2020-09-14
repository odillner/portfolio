import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'

import {closeWindow, maximizeWindow} from '../reducers/windows'
import IconGenerator from '../icons'

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left 60px;
    width: 100%;
    height: 40px;
    z-index: 10;
    background: #181818;
    display: flex
`

const MinimizedItem = styled.div`
    position: relative;
    width: 100px;
    height: 80%;
    z-index: 10;
    background: black;
    padding-left: 5px;
`

const Footer = () => {
    const windows = useSelector(state => state.windows.items)
    const dispatch = useDispatch()

    const maximize = (item) => {
        dispatch(maximizeWindow(item))
    }

    return(
        <Wrapper>
            {windows.map(window => {
                if (window.minimized) {
                    return (
                        <MinimizedItem
                            key={window.id}
                            onClick={() => maximize(window)}
                        >
                            <IconGenerator type={window.type} scale="25"></IconGenerator>
                            {window.type}
                        </MinimizedItem>
                    )
                }
            })}
        </Wrapper>
    )
}

export default Footer

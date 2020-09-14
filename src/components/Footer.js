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
`

const MinimizedItem = styled.div`
    position: fixed;
    bottom: 0;
    left 60px;
    width: 100%;
    height: 40px;
    z-index: 10;
    background: #181818;
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
                            variant='menu'
                        >
                            <IconGenerator type={window.type} scale="25" active></IconGenerator>
                            {window.type}
                        </MinimizedItem>
                    )
                }
            })}
        </Wrapper>
    )
}

export default Footer

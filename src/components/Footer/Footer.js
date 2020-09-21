import React from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import ToggleButton from "react-bootstrap/ToggleButton"
import {useHistory} from "react-router-dom"

import {closeWindow, maximizeWindow} from "../../reducers/windows"
import MinimizedItem from "./MinimizedItem";

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left 60px;
    width: 100%;
    height: 45px;
    z-index: 10;
    background: var(--alt-bg-color);
    display: flex;
    
`

const Footer = () => {
    const windows = useSelector(state => state.windows.items)
    const dispatch = useDispatch()
    const history = useHistory()

    const maximize = (item) => {
        dispatch(maximizeWindow(item))
        history.push(`/${item.type}`)
    }

    return(
        <Wrapper>
            {windows.map(window => {
                if (window.minimized) {
                    return (
                        <MinimizedItem
                            window={window}
                            key={window.id}
                            maximize={() => maximize(window)}
                        >
                        </MinimizedItem>
                    )
                }
            })}
        </Wrapper>
    )
}

export default Footer

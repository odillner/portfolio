import React from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import ToggleButton from "react-bootstrap/ToggleButton"
import {useHistory} from "react-router-dom"

import {closeWindow, maximizeWindow} from "../../reducers/windows"
import MinimizedItem from "./MinimizedItem"
import ExternalNavItem from "./ExternalNavItem";

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left 0;
    width: 100%;
    height: 60px;
    z-index: 10;
    background: var(--alt-bg-color);
    display: flex;
    justify-content: space-between;
`
const MinimizedItems = styled.div`
    text-align: center;
    display: flex;
    padding-left: 20px;
`

const SideItems = styled.div`
    text-align: center;
    display: flex;
    padding-right: 20px;
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
            <MinimizedItems>
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
            </MinimizedItems>
            <SideItems>
                <ExternalNavItem type='LinkedIn' link='https://www.linkedin.com/in/ossiandillner/'/>
                <ExternalNavItem type='GitHub' link='https://github.com/odillner/'/>
            </SideItems>
        </Wrapper>
    )
}

export default Footer

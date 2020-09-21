import React from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import ToggleButton from "react-bootstrap/ToggleButton"

import {closeWindow, maximizeWindow} from "../reducers/windows"
import {toggleTheme} from "../reducers/theme"
import ThemeButton from "./ThemeButton"
import IconGenerator from "../icons"

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left 60px;
    width: 100%;
    height: 40px;
    z-index: 10;
    background: var(--alt-bg-color);
    display: flex;
`

const MinimizedItem = styled.div`
    position: relative;
    width: 100px;
    height: 90%;
    z-index: 10;
    background: var(--main-bg-color);
    padding-left: 5px;
    border: solid black 1px;
`

const TextWrapper = styled.div`
    float: right;
`
const MinimizedItemText = styled.p`
    color: black;
    padding-right: 10px;
    padding-top: 5px;
`

const IconWrapper = styled.div`
    padding-top: 5px;
    display: inline-block
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
                            <IconWrapper>
                                <IconGenerator type={window.type} dimensions={25}></IconGenerator>
                            </IconWrapper>
                            <TextWrapper>
                                <MinimizedItemText>{window.type}</MinimizedItemText>
                            </TextWrapper>
                        </MinimizedItem>
                    )
                }
            })}
        </Wrapper>
    )
}

export default Footer

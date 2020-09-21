import React from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import ToggleButton from "react-bootstrap/ToggleButton"
import {useHistory} from "react-router-dom"

import {closeWindow, maximizeWindow} from "../reducers/windows"
import {toggleTheme} from "../reducers/theme"
import ThemeButton from "./ThemeButton"
import IconGenerator from "../icons"
import Hoverable from "./Hoverable/Hoverable"

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

const TextWrapper = styled.div`
    float: right;
`
const MinimizedItemText = styled.p`
    color: var(--main-icon-color);
    padding-right: 10px;
    padding-top: 5px;
`

const IconWrapper = styled.div`
    padding-top: 5px;
    display: inline-block
`

const HoverIconWrapper = styled.div`
    padding-top: 5px;
    display: none;
`

const MinimizedItem = styled.div`
    position: relative;
    width: 100px;
    height: 80%;
    z-index: 10;
    background: var(--main-bg-color);
    padding-left: 5px;
    margin-top: 3px;
    margin-right: 3px;

    border: solid var(--alt-bg-color) 1px;
    cursor: pointer;

    &:hover ${IconWrapper} {
        display: none;
    }

    &:hover {
        border: solid var(--main-accent-color) 1px;
    }

    &:hover ${MinimizedItemText} {
        color: var(--main-accent-color);
    }

    &:hover ${HoverIconWrapper} {
        display:inline-block;
    }
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
                            key={window.id}
                            onClick={() => maximize(window)}
                        >
                            <IconWrapper>
                                <IconGenerator type={window.type} dimensions={25}></IconGenerator>
                            </IconWrapper>
                            <HoverIconWrapper>
                                <IconGenerator type={window.type} dimensions={25} active></IconGenerator>
                            </HoverIconWrapper>
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

import React from "react"
import Draggable from "react-draggable"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import styled from "styled-components"
import {Resizable, ResizableBox} from 'react-resizable';

import {CloseButton, MinimizeButton} from "./WindowButtons"
import {closeWindow, selectWindow, updateWindowPosition, minimizeWindow} from "../reducers/windows"
import IconGenerator from "../icons"

const Wrapper = styled.div`
    z-index: ${props => props.zIndex};
    height: 500px;
    width: 500px;
    position: absolute;
    border: solid black 3px;
    box-shadow: ${props => props.active ? "3px 3px 0 var(--main-accent-color)" : "3px 3px 0 var(--alt-accent-color)"};
    transition: box-shadow 0.5s ease-out;
`
const Header = styled.div`
    background: var(--alt-bg-color);
    border-bottom: solid black 2px;
    display: flex;
    height: 30px;
    justify-content: space-between;
    cursor: move;
`

const HeaderText = styled.p`
    color: ${props => props.active ? "var(--main-accent-color)" : "var(--main-icon-color)"};
    letter-spacing: 1px;
`
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 94%;
    background: var(--main-bg-color);
    border: solid var(--alt-bg-color) 3px;
`
const IconWrapper = styled.div`
    padding-top: 1px;
    padding-left: 3px;
    display: inline-block
`
const StandardWindow = (props) => {
    /* tie the different states together ffs, create hook? */
    const id = props.id
    const {current, last, items} = useSelector(state => state.windows)
    const item = items.find(item => item.id === id)
    const dispatch = useDispatch()
    const history = useHistory()
    const active = (current === id)
    const close = () => {
        dispatch(closeWindow(id))

        if (current===id) {
            history.push("/")
        }
    }

    const getzIndex = () => {
        return (current===id) ? 15 : 11
    }

    const select = () => {
        history.push(`/${item.type}`)
        dispatch(selectWindow(item))
    }

    const minimize = () => {
        dispatch(minimizeWindow(item))
    }

    const updatePosition = (e, position) => {
        const {x, y} = position
        dispatch(updateWindowPosition(item, x, y))
    }

    if (item.minimized) {
        return null
    }

    return (
        <Draggable
            position={{x: item.x, y: item.y}}
            cancel='strong'
            onStop={updatePosition}
            onMouseDown={select}
        >
            <Wrapper active={active} zIndex={getzIndex()} minimzed={item.minimized}>
                <Header>
                    <IconWrapper>
                        <IconGenerator type={item.type} dimensions={25} active={active}/>
                    </IconWrapper>
                    <HeaderText active={active}>{props.title}</HeaderText>
                    <div>
                        <MinimizeButton click={minimize}/>
                        <CloseButton click={close}/>
                    </div>
                </Header>
                <strong className="no-cursor">
                    <Content>
                        {props.children}
                    </Content>
                </strong>
            </Wrapper>
        </Draggable>
    )
}

export default StandardWindow

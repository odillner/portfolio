import React from "react"
import Draggable from "react-draggable"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import styled from "styled-components"

import {CloseButton, MinimizeButton} from "./WindowButtons"
import {closeWindow, selectWindow, updateWindowPosition, minimizeWindow} from "../reducers/windows"
import IconGenerator from "../icons"

const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    border: solid black 3px;
    z-index: ${props => props.zIndex};
    box-shadow: ${props => props.active ? "3px 3px 0 var(--main-icon-color)" : ""};
`
const Header = styled.div`
    background: var(--alt-bg-color);
    border-bottom: solid black 2px;
    display: flex;
    height: 6%;
    justify-content: space-between;
    cursor: move;
`

const HeaderText = styled.p`
    color: black;
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

    /* HORRIBLE FOR PERFOMANCE, SHITLOAD OF COMPONENTS ARE RERENDERED A BILLION TIMES FIXXXX PLEASE */
    const drag = (e, position) => {
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
            onMouseDown={() => select()}
            onDrag={drag}
        >
            <Wrapper zIndex={getzIndex()} active={active}>
                <Header>
                    <IconWrapper>
                        <IconGenerator type={item.type} dimensions={25} active={active}/>
                    </IconWrapper>
                    <HeaderText>{props.title}</HeaderText>
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

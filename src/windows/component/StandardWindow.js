import React from "react"
import Draggable from "react-draggable"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import styled from "styled-components"

import {closeWindow, selectWindow, updateWindowPosition, minimizeWindow} from "../../reducers/windows"
import WindowHeader from "./WindowHeader"
import Banner from "../../components/Header/Banner"

const Wrapper = styled.div`
    z-index: ${props => props.zIndex};
    height: 500px;
    width: 700px;
    position: absolute;
    border: solid black 1px;
    box-shadow: 3px 3px 0 ${props => props.active ? "var(--main-accent-color)" : "var(--alt-accent-color)"};
    transition: box-shadow 0.5s ease-out;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 448px;
    background: var(--main-bg-color);
`

const BottomRightWrapper = styled.svg`
    position: fixed;
    z-index: 0;
    height: 120px;
    right: 0;
    bottom: -1px;
    transform: rotateX(180deg); 
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
        history.push("/")
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
                <WindowHeader item={item} active={active} minimize={minimize} close={close}/>
                <strong className="no-cursor">
                    <Content>
                        {props.children}
                        <BottomRightWrapper viewBox="-750 50 1600 423" data-height="200">
                            <Banner/>
                        </BottomRightWrapper>
                    </Content>
                </strong>
            </Wrapper>
        </Draggable>
    )
}

export default StandardWindow

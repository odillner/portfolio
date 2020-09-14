import React from 'react'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {CloseButton, MinimizeButton} from './WindowButtons'
import {closeWindow, selectWindow, updateWindowPosition, minimizeWindow} from '../reducers/windows'

const Wrapper = styled.div`
    position: absolute;
    background: #181818;
`
const Header = styled.div`

`
const Content = styled.div`

`

const StandardWindow = (props) => {
    /* tie the different states together ffs, create hook? */
    const id = props.id
    const {current, last, items} = useSelector(state => state.windows)
    const item = items.find(item => item.id === id)
    const dispatch = useDispatch()
    const history = useHistory()

    const close = () => {
        dispatch(closeWindow(id))

        if (last===id) {
            history.push('/')
        }
    }

    const getzIndex = () => {
        return (current===id) ? 15 : 11
    }

    const select = () => {
        dispatch(selectWindow(id))
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
            <Wrapper
                style={{position: 'absolute', zIndex: getzIndex()}}
            >
                <Header className='window-header'>
                    {props.title}
                    <CloseButton click={close}/>
                    <MinimizeButton click={minimize}/>
                </Header>
                <strong className="no-cursor">
                    <Content>
                        {props.children}
                        ssfasdfasdfasdf
                    </Content>
                </strong>
            </Wrapper>
        </Draggable>
    )
}

export default StandardWindow

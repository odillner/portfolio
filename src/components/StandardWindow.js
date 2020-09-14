import React from 'react'
import {Window, WindowHeader, WindowContent, Button} from '../windows/components/node_modules/react95'
import Draggable from 'react-draggable'
import {useDispatch, useSelector} from 'react-redux'

import {CloseButton, MinimizeButton} from './WindowButtons'
import {closeWindow, selectWindow, updateWindowPosition, minimizeWindow} from '../reducers/windows'
import {useHistory} from 'react-router-dom'

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
            <div
                style={{display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: getzIndex()}}
            >
                <Window className='window'>
                    <WindowHeader className='window-header'>
                        {props.title}
                        <CloseButton click={close}/>
                        <MinimizeButton click={minimize}/>
                    </WindowHeader>
                    <strong className="no-cursor">
                        <WindowContent>
                            {props.children}
                        </WindowContent>
                    </strong>
                </Window>
            </div>
        </Draggable>

    )
}

export default StandardWindow

import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

import {addWindow, closeWindow, maximizeWindow} from "../../reducers/windows"

import IconGenerator from "../../icons"
import Hoverable from "../Hoverable"

export const PageNavItem = ({type}) => {
    const item = useSelector(state => state.windows.items).find(item => item.type === type)
    const dispatch = useDispatch()
    const history = useHistory()

    const path = `/${type}`

    const isActive = () => {
        return !!(item)
    }

    const onClick = () => {
        if (item) {
            if (item.minimized) {
                history.push(path)
                dispatch(maximizeWindow(item))
            } else {
                history.push("/")
                dispatch(closeWindow(item.id))
            }
        } else {
            history.push(path)
            dispatch(addWindow(type))
        }
    }
    return (
        <div onClick={() => onClick()}>
            <Hoverable alt={<IconGenerator type={type} active dimensions={50}/>}>
                <IconGenerator type={type} dimensions={50} active={isActive()}/>
            </Hoverable>
        </div>
    )
}

export const ExternalNavItem = ({type, link}) => {
    return (
        <div>
            <a href={link}>
                <Hoverable alt={<IconGenerator type={type} color={"var(--alt-accent-color)"} dimensions={40}/>}>
                    <IconGenerator type={type} dimensions={40}/>
                </Hoverable>
            </a>
        </div>
    )
}
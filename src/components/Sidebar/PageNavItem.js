import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

import {addWindow, closeWindow, maximizeWindow} from "../../reducers/windows"

import IconGenerator from "../../icons"

const PageNavItem = ({type}) => {
    const item = useSelector(state => state.windows.items).find(item => item.type === type)
    const dispatch = useDispatch()
    const history = useHistory()

    const path = `/${type}`

    const getIconColor = () => {
        if (item) {
            if (item.minimized) {
                return "var(--alt-accent-color)"
            } else {
                return "var(--main-accent-color)"
            }
        } else {
            return "var(--main-icon-color)"
        }
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
            <IconGenerator type={type} dimensions={50} color={getIconColor()} hover={"var(--main-accent-color)"}/>
        </div>
    )
}

export default PageNavItem
import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

import {addWindow, closeWindow, maximizeWindow} from "../../reducers/windows"
import IconGenerator from "../../icons"
import styled from "styled-components"

const ItemWrapper = styled.div`
    cursor: pointer;
    margin: 2px;
`

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
        <ItemWrapper onClick={() => onClick()}>
            <IconGenerator type={type} dimensions={50} color={getIconColor()} hover={"var(--main-accent-color)"}/>
        </ItemWrapper>
    )
}

export default PageNavItem
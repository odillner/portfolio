import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import {Link, useHistory, useLocation} from "react-router-dom"

import {addWindow, closeWindow, maximizeWindow} from "../reducers/windows"

import IconGenerator from "../icons"
import Hoverable from "./Hoverable/Hoverable"
import Logo from "./Logo"

const PageNavItems = ({type}) => {
    const path = `/${type}`
    const item = useSelector(state => state.windows.items).find(item => item.type === type)
    const dispatch = useDispatch()
    const history = useHistory()

    const isActive = () => {
        return (item) ? true : false
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

const ExternalNavItem = ({type, link}) => {
    return (
        <div>
            <a href={link}>
                <Hoverable alt={<IconGenerator type={type} active dimensions={40}/>}>
                    <IconGenerator type={type} dimensions={40}/>
                </Hoverable>
            </a>
        </div>
    )
}


const MainItems = styled.div`
    background: var(--alt-bg-color);
    display: block;
    padding-bottom: 0px;
    list-style: none;
    text-align: center;
    padding-left: 5px;

`
const BottomItems = styled.div`
    background: var(--alt-bg-color);
    display: block;
    padding-bottom: 20px;
    list-style: none;
    text-align: center;
    padding-left: 7px;
`
const SideNav = styled.div`
    background: var(--alt-bg-color);
    width: 60px;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
    min-height: 500px;
`

const Sidebar = () => {
    return (
        <SideNav>
            <Logo/>
            <MainItems>
                <PageNavItems type='Home'></PageNavItems>
                <PageNavItems type='About'></PageNavItems>
                <PageNavItems type='Skills'></PageNavItems>
                <PageNavItems type='Contact'></PageNavItems>
            </MainItems>
            <BottomItems>
                <ExternalNavItem type='LinkedIn' link='https://www.linkedin.com/in/ossiandillner/'></ExternalNavItem>
                <ExternalNavItem type='GitHub' link='https://github.com/odillner/'></ExternalNavItem>
            </BottomItems>
        </SideNav>
    )
}

export default Sidebar
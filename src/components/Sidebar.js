import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'

import {addWindow, closeWindow, maximizeWindow} from '../reducers/windows'

import IconGenerator from '../icons'
import Hoverable from './Hoverable/Hoverable'

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
                dispatch(maximizeWindow(item))
            } else {
                dispatch(closeWindow(item.id))
            }
        } else {
            dispatch(addWindow(type))
        }
    }
    return (
        <div onClick={() => onClick()}>
            <Hoverable alt={<p>{type}</p>}>
                <IconGenerator type={type} active={isActive()}/>
            </Hoverable>
        </div>
    )
}

const ExternalNavItem = ({type, link}) => {
    return (
        <a href={link}>
            <Hoverable alt={<IconGenerator type={type} active/>}>
                <IconGenerator type={type}/>
            </Hoverable>
        </a>
    )
}

const LogoWrapper = styled.div`
    display: block;
    height: 70px;
    background-color: black;
    text-color: white;
    text-align: center;
`

const Logo = () => {
    return (
        <LogoWrapper>
            <IconGenerator type="Logo"/>
        </LogoWrapper>
    )
}

const MainItems = styled.div`
    background: #181818;
    display: block;
    padding: 0;
    padding-bottom: 0px;
    list-style: none;
    text-align: center;
    padding-left: 5px;

`
const BottomItems = styled.div`
    background: #181818;
    display: block;
    padding: 0;
    padding-bottom: 0px;
    text-align: center;
    margin: 0;
    padding-bottom: 20px;
    padding-left: 5px;

`
const SideNav = styled.div`
    background: #181818;
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
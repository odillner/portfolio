import React, {useState} from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

import IconGenerator from '../icons'
import Hoverable from './Hoverable/Hoverable'

const NavItem = ({type, initialActive}) => {
    const [active, setActive] = useState(initialActive)

    return (
        <Hoverable alt={<p>{type}</p>}>
            <IconGenerator type={type} active={active}/>
        </Hoverable>
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
            <NavItem type='Logo'></NavItem>
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
    width: 70px;
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
                <NavItem type='Home'></NavItem>
                <NavItem type='About'></NavItem>
                <NavItem type='Skills'></NavItem>
                <NavItem type='Contact'></NavItem>
            </MainItems>
            <BottomItems>
                <NavItem type='LinkedIn'></NavItem>
                <NavItem type='GitHub'></NavItem>
            </BottomItems>
        </SideNav>
    )
}

export default Sidebar
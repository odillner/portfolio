import React from 'react'
import styled from 'styled-components'

import icons from '../icons'

const NavItemWrapper = styled.div`

`
const NavItem = ({type, active}) => {
    const Icon = (type) ? icons[type] : null

    return (
        <NavItemWrapper>
            <Icon/>
        </NavItemWrapper>
    )
}

const MainItems = styled.div`

`
const BottomItems = styled.div`
    display: block;
    padding: 0;
    padding-bottom: 0px;
    list-style: none;
    text-align: center;
    margin: 0;
    padding-bottom: 20px;
`
const SideNav = styled.div`
    background: #181818;
    width: 100px;
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
            <MainItems>
                <NavItem type='GitHub'></NavItem>
                <NavItem type='GitHub'></NavItem>
            </MainItems>
            <BottomItems>
                <NavItem type='GitHub'></NavItem>
                <NavItem type='GitHub'></NavItem>
            </BottomItems>
        </SideNav>
    )
}

export default Sidebar
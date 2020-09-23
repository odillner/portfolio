import React from "react"
import styled from "styled-components"

import Logo from "../Logo"
import PageNavItem from "./PageNavItem"


const MainItems = styled.div`
    background: var(--alt-bg-color);
    display: block;
    list-style: none;
    text-align: center;
    padding-top: 100px;
`

const Wrapper = styled.div`
    background: var(--alt-bg-color);
    width: 60px;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 3;
    min-height: 500px;
`

const Sidebar = () => {
    return (
        <Wrapper>
            <Logo/>
            <MainItems>
                <PageNavItem type='Home'/>
                <PageNavItem type='About'/>
                <PageNavItem type='Skills'/>
                <PageNavItem type='Contact'/>
            </MainItems>
            <div></div>
        </Wrapper>
    )
}

export default Sidebar
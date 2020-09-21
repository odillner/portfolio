import React from "react"
import styled from "styled-components"


const LogoElemWrapper = styled.div`
    display: block;
    height: 90px;
    background-color: black;
    text-align: center;
`

const LogoText = styled.p`
    color: white;
    font-size: 10px;
`

const LogoItem = () => {
    return (
        <LogoElemWrapper>
            <SVGLogo></SVGLogo>
            <LogoText>Ossian Dillner</LogoText>
        </LogoElemWrapper>
    )
}

const SVGLogo = () => {
    return (
        <svg height="50" width="50">
            <svg xmlns="http://www.w3.org/2000/svg" width="55"
                 height="55" viewBox="0 0 24 24" stroke-width="3" stroke="var(--alt-accent-color)" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="52"
                 height="52" viewBox="0 0 24 24" stroke-width="3" stroke="var(--main-accent-color)" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6"/>
            </svg>
        </svg>
)
}

export default LogoItem



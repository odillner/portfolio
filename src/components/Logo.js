import React, {useEffect, useState} from "react"
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
    letter-spacing: 1px;
`

const LogoItem = () => {
    return (
        <LogoElemWrapper>
            <SVGLogo/>
            <LogoText><b>Ossian <br/> Dillner</b></LogoText>
        </LogoElemWrapper>
    )
}


const LogoElement = styled.svg`
    width: ${props => props.dimensions}px;
    height: ${props => props.dimensions}px;
    stroke-width: 3;
    stroke: ${props => props.active ? "var(--main-accent-color)" : "var(--alt-accent-color)"};
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 1.5s ease-out;
`
const SVGLogo = () => {
    const [state, setState] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setState(!state)
        }, 2000)

        return () => clearInterval(interval)
    },[state])

    return (
        <svg height="50" width="50">
            <LogoElement width="52" height="52" active={!state} viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6"/>
            </LogoElement>
            <LogoElement dimensions={55} active={state} viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6"/>
            </LogoElement>
        </svg>
    )
}

export default LogoItem



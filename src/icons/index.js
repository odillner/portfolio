import React from "react"
import styled from "styled-components"

const IconWrapper = styled.svg`
    width: ${props => props.dimensions}px;
    height: ${props => props.dimensions}px;
    stroke-width: 1;
    stroke: ${props => props.color};
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.5s ease-out;
    
    ${props => (props.hover) ?
        `
        &:hover {
            stroke:${props.hover};
        }
        ` : null}
`

const IconGenerator = ({type, active, dimensions, color, hover}) => {
    if (!type) {
        return null
    }
    const Icon = icons[type]

    let iconColor = "var(--main-icon-color)"

    if (color) {
        iconColor = color
    } else {
        if (active) {
            iconColor = "var(--main-accent-color)"
        }
    }

    return (
        <IconWrapper color={iconColor} hover={hover} viewBox="0 0 24 24" dimensions={dimensions}>
            <Icon/>
        </IconWrapper>
    )
}

const Home = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </>
    )
}

const GitHub = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21a4.192 4.192 0 0 0 -.08 -3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 0 0 4 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        </>
    )
}

const LinkedIn = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </>
    )
}

const About = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </>
    )
}

const Skills = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="3.6" y1="9" x2="20.4" y2="9" />
            <line x1="3.6" y1="15" x2="20.4" y2="15" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
        </>
    )
}

const Contact = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </>
    )
}

const Minimize = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="5" y1="12" x2="19" y2="12" />
        </>
    )
}

const Close = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </>
    )
}

const Dark = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="5" x2="12" y2="5.01" />
            <line x1="17" y1="7" x2="17" y2="7.01" />
            <line x1="19" y1="12" x2="19" y2="12.01" />
            <line x1="17" y1="17" x2="17" y2="17.01" />
            <line x1="12" y1="19" x2="12" y2="19.01" />
            <line x1="7" y1="17" x2="7" y2="17.01" />
            <line x1="5" y1="12" x2="5" y2="12.01" />
            <line x1="7" y1="7" x2="7" y2="7.01" />
        </>
    )
}

const Light = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="5" x2="12" y2="3" />
            <line x1="17" y1="7" x2="18.4" y2="5.6" />
            <line x1="19" y1="12" x2="21" y2="12" />
            <line x1="17" y1="17" x2="18.4" y2="18.4" />
            <line x1="12" y1="19" x2="12" y2="21" />
            <line x1="7" y1="17" x2="5.6" y2="18.4" />
            <line x1="6" y1="12" x2="4" y2="12" />
            <line x1="7" y1="7" x2="5.6" y2="5.6" />
        </>
    )
}

const Left = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="15 6 9 12 15 18"/>
        </>
    )
}

const Right = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="9 6 15 12 9 18"/>
        </>
    )
}

const icons = {
    Home,
    GitHub,
    LinkedIn,
    About,
    Skills,
    Contact,
    Minimize,
    Close,
    Dark,
    Light,
    Left,
    Right
}

export default IconGenerator

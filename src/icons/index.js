import React from 'react'
import styled from 'styled-components'

/* TODO: styled components && scaling */

const IconGenerator = ({type, active, scale}) => {
    if (!type) {
        return null
    }
    const Icon = icons[type]

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-letter-o"
            width={(scale) ? scale : 50}
            height={(scale) ? scale : 50}
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke={(active) ? "#1abc9c" : "#9E9E9E"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Icon/>
        </svg>
    )
}

const Logo = () => {
    return (
        <>
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" />
        </>
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

const icons = {
    Logo,
    Home,
    GitHub,
    LinkedIn,
    About,
    Skills,
    Contact
}

export default IconGenerator

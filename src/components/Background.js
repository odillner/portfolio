import React from "react"
import styled from "styled-components"

const BackgroundWrapper = styled.svg`
    display: block;
    position: absolute;
    bottom: 45px;
`

const Background = () => {

    return (
        <BackgroundWrapper id="" preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" data-height="200">
            <polygon style={{fill: "var(--alt-bg-color)"}} points="1488,134 1304,100 1068,152 909.935,92.044 672,198 364,142 242,32 -4,95 -4,204 1604,204 1604,0 "></polygon>
            <polygon style={{opacity: 1, fill: "var(--main-accent-color)"}} points="672,198 364,142 242,32 -4,95 -4,82.333 242,32 374,136 "></polygon>
            <polygon style={{opacity: 1, fill: "var(--alt-accent-color)"}} points="894,86 672,198 909.935,92.044 "></polygon>
            <polygon style={{opacity: 1, fill: "var(--main-accent-color)"}} points="1068,152 1302,86 1486,126 1604,0 1488,134 1304,100 "></polygon>
        </BackgroundWrapper>
    )
}

export default Background
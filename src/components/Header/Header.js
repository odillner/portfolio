import React, {useEffect, useState} from "react"
import styled from "styled-components"

import Banner from "./Banner"

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left 0;
    width: 100%;
    height: 90px;
    z-index: 3;
    background: var(--alt-bg-color);
    display: flex;
`

const SVGWrapper = styled.svg`
    position: fixed;
    z-index: 5;
    height: 90px;
    right: 0;
`

const Header = () => {
    return(
        <Wrapper>
            <SVGWrapper  viewBox="-750 50 1600 200" data-height="200">
                <Banner/>
            </SVGWrapper>
        </Wrapper>
    )
}

export default Header

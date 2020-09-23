import React, {useEffect, useState} from "react"
import styled from "styled-components"

import Banner from "./Banner"


const RightSideBanner = styled.svg`
    position: fixed;
    z-index: 5;
    height: 90px;
    right: 0;
`

const LeftSideBanner = styled.svg`
    position: fixed;
    z-index: 5;
    height: 90px;
    transform: rotate(180deg);
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left 0;
    width: 100%;
    height: 90px;
    z-index: 3;
    background: var(--alt-bg-color);
    display: flex;
    
    @media only screen and (max-width: 700px) { 
      ${LeftSideBanner} { 
        display: none; 
      } 
    }
`

const Header = () => {
    return(
        <Wrapper>
            <LeftSideBanner  viewBox="-620 50 1600 200" data-height="200">
                <Banner/>
            </LeftSideBanner>
            <RightSideBanner  viewBox="-750 50 1600 200" data-height="200">
                <Banner/>
            </RightSideBanner>
        </Wrapper>
    )
}

export default Header

import React from "react"
import styled from "styled-components"

import Banner from "./Banner"


const RightSideWrapper = styled.svg`
    position: fixed;
    z-index: 5;
    height: 200px;
    right: 0;
`

const BackgroundWrapper = styled.svg`
    position: fixed;
    z-index: 4;
    height: 270px;
    right: 0;
`

const LeftSideWrapper = styled.svg`
    position: fixed;
    z-index: 5;
    height: 90px;
    transform: scaleX(-1);
`

const SecondLeftSideWrapper = styled.svg`
    position: fixed;
    z-index: 5;
    height: 90px;
    transform: scaleX(-1);
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
    
    @media only screen and (max-width: 800px) { 
      ${LeftSideWrapper} { 
        display: none; 
      }
    }
    @media only screen and (max-width: 1100px) { 
      ${SecondLeftSideWrapper} { 
        display: none; 
      } 
    }
`

const Header = () => {
    return(
        <Wrapper>
            <LeftSideWrapper viewBox="-690 50 1600 190" data-height="200">
                <Banner/>
            </LeftSideWrapper>
            <SecondLeftSideWrapper viewBox="43 50 1600 190" data-height="200">
                <Banner/>
            </SecondLeftSideWrapper>
            <RightSideWrapper viewBox="-750 50 1600 423" data-height="200">
                <Banner/>
            </RightSideWrapper>
        </Wrapper>
    )
}

export default Header

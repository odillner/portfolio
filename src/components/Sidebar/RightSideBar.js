import React from "react"
import styled from "styled-components"


const Corner = styled.div`
    display: block;
    height: 90px;
    background-color: black;
    text-align: center;

`
const Wrapper = styled.div`
    background: var(--alt-bg-color);
    width: 60px;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 2;
    min-height: 500px;
    right: 0;
`

const RightSidebar = () => {
    return (
        <Wrapper>
            <Corner/>
        </Wrapper>
    )
}

export default RightSidebar
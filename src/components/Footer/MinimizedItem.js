import React from "react"
import styled from "styled-components"

import IconGenerator from "../../icons"

const TextWrapper = styled.div`
    float: right;
`
const ItemText = styled.p`
    color: var(--main-icon-color);
    padding-right: 10px;
    padding-top: 5px;
    transition: color 0.5s ease-out;
`

const IconWrapper = styled.div`
    padding-top: 5px;
    display: inline-block
`

const HoverIconWrapper = styled.div`
    padding-top: 5px;
    display: none;
`

const ItemWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 38px;
    z-index: 10;
    background: var(--main-bg-color);
    padding-left: 5px;
    margin-top: 3px;
    margin-right: 3px;
    transition: border 0.5s ease-out;
    border: solid var(--alt-bg-color) 1px;
    cursor: pointer;

    &:hover ${IconWrapper} {
        display: none;
    }

    &:hover {
        border: solid var(--main-accent-color) 1px;
    }

    &:hover ${ItemText} {
        color: var(--main-accent-color);
    }

    &:hover ${HoverIconWrapper} {
        display:inline-block;
    }
`

const MinimizedItem = ({window, maximize}) => {
    return(
        <ItemWrapper onClick={maximize}>
            <IconWrapper>
                <IconGenerator type={window.type} dimensions={25}/>
            </IconWrapper>
            <HoverIconWrapper>
                <IconGenerator type={window.type} dimensions={25} active/>
            </HoverIconWrapper>
            <TextWrapper>
                <ItemText>{window.type}</ItemText>
            </TextWrapper>
        </ItemWrapper>
    )
}

export default MinimizedItem

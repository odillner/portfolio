import React from "react"
import styled from "styled-components"

import IconGenerator from "../../icons"

const TextWrapper = styled.div`
    float: right;
    text-align: center;
    padding-left: 20px;
`
const ItemText = styled.p`
    color: var(--main-icon-color);
    padding-top: 5px;
    transition: color 0.5s ease-out;
    letter-spacing: 1px;
`

const IconWrapper = styled.div`
    display: inline-block
`

const HoverIconWrapper = styled.div`
    display: none;
`

const Icons = styled.div`
    padding-top: 5px;
    padding-left: 5px;
    width: 20px
`

const ItemWrapper = styled.div`
    display: flex;
    position: relative;
    width: 120px;
    height: 38px;
    z-index: 10;
    background: var(--main-bg-color);
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
            <Icons>
                <IconWrapper>
                    <IconGenerator type={window.type} dimensions={25}/>
                </IconWrapper>
                <HoverIconWrapper>
                    <IconGenerator type={window.type} dimensions={25} active/>
                </HoverIconWrapper>
            </Icons>
            <TextWrapper>
                <ItemText>{window.type}</ItemText>
            </TextWrapper>
        </ItemWrapper>
    )
}

export default MinimizedItem

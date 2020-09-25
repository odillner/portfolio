import React from "react"
import styled from "styled-components"

import {CloseButton, MinimizeButton} from "./WindowButtons"
import Banner from "../../components/Header/Banner"
import IconGenerator from "../../icons"

const Header = styled.div`
    background: var(--alt-bg-color);
    display: flex;
    height: 50px;
    justify-content: space-between;
    cursor: move;
`

const HeaderText = styled.p`
    color: ${props => props.color};
    letter-spacing: 1px;
    transition: color 0.5s ease-out;
    padding-top: 7px;
    padding-left: 3px;
`

const TitleWrapper = styled.div`
    padding-top: 5px;
    display: flex;
`

const IconWrapper = styled.div`
    padding-top: 1px;
    padding-left: 3px;
    display: flex;
`

const LeftSideWrapper = styled.svg`
    position: fixed;
    z-index: 0;
    height: 50px;
    transform: scaleX(-1);
`

const ButtonWrapper = styled.div`
    padding-top: 5px;
`

const WindowHeader = ({item, active, minimize, close}) => {
    const getAccentColor = () => {
        if (active) {
            return "var(--main-accent-color)"
        } else {
            return "var(--alt-accent-color)"
        }
    }

    return (
        <Header>
            <LeftSideWrapper viewBox="-750 50 1600 170" data-height="200">
                <Banner/>
            </LeftSideWrapper>
            <div/>
            <TitleWrapper>
                <IconWrapper>
                    <IconGenerator type={item.type} dimensions={35} color={getAccentColor()}/>
                </IconWrapper>
                <HeaderText color={getAccentColor()}>{item.type}</HeaderText>
            </TitleWrapper>
            <ButtonWrapper>
                <MinimizeButton click={minimize} active={active}/>
                <CloseButton click={close} active={active}/>
            </ButtonWrapper>
        </Header>
    )
}

export default WindowHeader

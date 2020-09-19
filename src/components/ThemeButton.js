import React from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"

import ToggleButton from "react-bootstrap/ToggleButton"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"

import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

import {changeTheme} from "../reducers/theme"
import Themes from "../styles/"
import IconGenerator from "../icons"


const Wrapper = styled.div`
    position: absolute;
    right: 5%;
`
const DarkThemeButton = styled(ToggleButton)`
    size: sm
`
const LightThemeButton = styled(ToggleButton)`

`

const ThemeButton = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const onSelect = () => {
        dispatch(changeTheme())
    }

    return(
        <Wrapper>

            <DropdownButton
                drop="up"
                variant="secondary"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            Change theme:
            <ToggleButtonGroup
                type="checkbox"
                value={theme}
                onChange={onSelect}
            >
                <DarkThemeButton value={0}>
                    <IconGenerator type="Dark" dimensions={25} color="white"/>
                    Dark
                </DarkThemeButton>
                <LightThemeButton value={1}>
                    <IconGenerator type="Light" dimensions={25} color="white"/>
                    Light
                </LightThemeButton>
            </ToggleButtonGroup>
        </Wrapper>
    )
}

export default ThemeButton

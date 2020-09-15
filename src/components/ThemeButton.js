import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'

import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import {toggleTheme} from '../reducers/theme'

import IconGenerator from '../icons'


const Wrapper = styled.div`
    position: absolute;
    right: 5%;
`
const DarkThemeButton = styled(ToggleButton)`

`
const LightThemeButton = styled(ToggleButton)`

`

const ThemeButton = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const changeTheme = () => {
        dispatch(toggleTheme())
    }

    return(
        <Wrapper>
            Change theme:
            <ToggleButtonGroup
                type="checkbox"
                value={theme}
                onChange={changeTheme}
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

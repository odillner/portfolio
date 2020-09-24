import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"


import {changeTheme} from "../reducers/theme"
import Themes from "../styles/themes"
import IconGenerator from "../icons"


const Wrapper = styled.div`
    position: fixed;
    display: flex;
    right: 0;
    top: 25%;
    z-index: 5;
    height: 200px;
`

const ToggleButton = styled.div`
    position: relative;
    width: 20px;
    height 100%;
    background: var(--alt-bg-color);
    border-bottom-left-radius: 100%20px;
    border-top-left-radius: 100%20px;
    
    &:hover {
        border-left: ${props => (props.toggled) ? "solid var(--alt-accent-color)" : "solid var(--main-accent-color)"} 1px;
    }
`

const InsideWrapper = styled.div`
    position: relative;
    background: var(--alt-bg-color);
    width: 200px;
    height 100%;
    z-index: 5;
    padding-top: 20px;
`


const ThemeWrapper = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const [toggled, setToggled] = useState(false)

    const onSelect = () => {
        dispatch(changeTheme())
    }

    const currentTheme = Themes[theme]

    return(
        <Wrapper>
            <ToggleButton
                onClick={() => setToggled(!toggled)}
                toggled={toggled}
            />
            {(toggled) ?
                <InsideWrapper>
                    {currentTheme.obj.map(item => {
                        return (
                            <ThemeColor key={item.name} item={item}/>
                        )
                    })}
                </InsideWrapper>
                :
                null
            }
        </Wrapper>
    )
}


const ColorWrapper = styled.div`
    display: flex;
    height: 30px;
    color: white;
`

const ColorPicker = styled.input`
    display:block;
    margin-top: 8px;
    margin-right: 8px;
    height: 10px;
    width 20px;
    background: ${props => props.color}
`

const ThemeColor = ({item}) => {
    return (
        <ColorWrapper>
            <ColorPicker name="Color Picker" type="color" value={item.value}/>
            {item.name}
        </ColorWrapper>
    )
}


export default ThemeWrapper

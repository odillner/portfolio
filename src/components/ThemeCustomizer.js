import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import {CompactPicker, PhotoshopPicker} from "react-color"

import IconGenerator from "../icons"
import {updateTheme} from "../reducers/theme"


const Wrapper = styled.div`
    position: fixed;
    display: flex;
    right: 0;
    top: 25%;
    z-index: ${props => (props.open) ? "20" : "5"};
    height: 180px;
`

const InsideWrapper = styled.div`
    position: relative;
    background: var(--alt-bg-color);
    width: 200px;
    height 100%;
    z-index: 5;
    padding-top: 20px;
`


const ThemeCustomizer = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [pickedItem, setPickedItem] = useState(null)

    const openColorPicker = (item) => {
        setPickedItem(item)
    }

    const toggleOpen = () => {
        setOpen(!open)
        setPickedItem(null)
    }

    const changeColor = (color) => {

        dispatch(updateTheme(pickedItem.name, color.hex))
    }

    return(
        <Wrapper open={open}>
            <ToggleButton
                onClick={() => toggleOpen()}
                open={open}
            />
            {(open) ?
                <InsideWrapper>
                    {theme.map(item => {
                        return (
                            <ThemeColor
                                key={item.name}
                                item={item}
                                onClick={openColorPicker}
                                pickedItem={pickedItem}
                            />
                        )
                    })}
                </InsideWrapper>
                :
                null
            }
            {(pickedItem) ?
                <ColorPicker
                    item={pickedItem}
                    onChange={changeColor}
                />
                :
                null
            }
        </Wrapper>
    )
}


const ToggleWrapper = styled.div`
    position: relative;
    width: 30px;
    height 100%;
    background: var(--alt-bg-color);
    border-bottom-left-radius: 100%30px;
    border-top-left-radius: 100%30px;
    transition: border 0.5s ease-out;
    justify-content: space-between;
    display: block;
    ${props => (props.open) ? "border-left: solid var(--main-accent-color) 1px;" : null}
    
    &:hover {
        border-left: ${props => (props.open) ? "solid var(--alt-accent-color)" : "solid var(--main-accent-color)"} 1px;
    }
`
const ToggleButton = ({open, onClick}) => {
    const iconType = (open) ? "Right" : "Left"
    return (
        <ToggleWrapper
            open={open}
            onClick={onClick}
        >
            <IconGenerator type={iconType} dimensions={35} color={"var(--main-icon-color)"} hover={"var(--main-accent-color)"}/>
            <IconGenerator type={iconType} dimensions={35} color={"var(--main-icon-color)"} hover={"var(--main-accent-color)"}/>
        </ToggleWrapper>
    )

}
const PickerWrapper = styled.div`
    height 100%;
    background: var(--alt-bg-color);
    padding-top: 25px;
`

const StyledPicker = styled(PhotoshopPicker)`
    background: var(--alt-bg-color);
    padding-right: 1px;
`
/*
const ColorPicker = ({item, onChange}) => {
    return (
        <PickerWrapper>
            <StyledPicker
                color={item.value}
                onChange={onChange}
            />
        </PickerWrapper>
    )
}
*/
const ColorPicker = ({item, onChange}) => {
    return (
        <PickerWrapper>
            <StyledPicker
                color={item.value}
                onChange={onChange}
            />
        </PickerWrapper>
    )
}

const ColorWrapper = styled.div`
    padding-left: 5px;
    margin-right: 10px;
    display: flex;
    height: 30px;
    color: white;
    border-radius: 5px;
    transition: border 0.5s ease-out;
    transition: background 0.5s ease-out;

    ${props => (props.selected) ? "border: 1px solid var(--main-icon-color); background: var(--main-bg-color)" : null}
`

const ColorDisplay = styled.div`
    display:block;
    margin-top: 8px;
    margin-right: 8px;
    height: 10px;
    width 20px;
    background: ${props => props.color};
    border: 1px solid black;
`

const ThemeColor = ({item, onClick, pickedItem}) => {
    const selected = (pickedItem) ? (item.name === pickedItem.name) : false

    return (
        <ColorWrapper
            onClick={() => onClick(item)}
            selected={selected}
        >
            <ColorDisplay color={item.value}/>
            {item.name}
        </ColorWrapper>
    )
}


export default ThemeCustomizer

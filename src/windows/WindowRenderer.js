import React from "react"
import {useSelector} from "react-redux"

import windowTypes from "./types/"
import styled from "styled-components"



const Wrapper = styled.div`
    position: relative;
    width 100%;
    height: 100%;
`

function WindowRenderer() {
    const windows = useSelector(state => state.windows)

    return (
        <Wrapper>
            {windows.items.map(item => {
                const Component = windowTypes[item.type]

                return (
                    <Component
                        key={item.id}
                        initialState={item.initialState}
                        id={item.id}
                    />
                )
            })}
        </Wrapper>
    )
}

export default WindowRenderer

import React from "react"
import {useSelector} from "react-redux"

import windowTypes from "./types/"
import styled from "styled-components"
import StandardWindow from "./StandardWindow";



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
                    <StandardWindow id={item.id} key={item.id}>
                        <Component
                            initialState={item.initialState}
                        />
                    </StandardWindow>
                )
            })}
        </Wrapper>
    )
}

export default WindowRenderer

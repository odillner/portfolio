import React from 'react'
import styled from 'styled-components'
import IconGenerator from '../icons'

const StyledButton = styled.button`
  width: 20;
  height: 20;
  position: relative;
  right: 0;
`

export const CloseButton = ({click}) => {
    return (
        <StyledButton onClick={click}>
            <IconGenerator type="Close" scale={20} color="black"/>
        </StyledButton>
    )
}

export const MinimizeButton = ({click}) => {
    return (
        <StyledButton onClick={click}>
            <IconGenerator type="Minimize" scale={20} color="black"/>
        </StyledButton>
    )
}
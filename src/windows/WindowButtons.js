import React from "react"
import styled from "styled-components"
import IconGenerator from "../icons"

const StyledButton = styled.button`
  width: 20;
  height: 20;
  position: relative;
  right: 0;
  background: var(--main-bg-color);
  border: 2px solid var(--alt-bg-color);
  transition: background 0.5s ease-out;

  &:hover {
    background: ${props => (props.active) ? "var(--main-accent-color)" : "var(--alt-accent-color)"};
  }
`

export const CloseButton = ({click, active}) => {
    return (
        <StyledButton onClick={click} active={active}>
            <IconGenerator type="Close" dimensions={20} color="black"/>
        </StyledButton>
    )
}

export const MinimizeButton = ({click, active}) => {
    return (
        <StyledButton onClick={click} active={active}>
            <IconGenerator type="Minimize" dimensions={20} color="black"/>
        </StyledButton>
    )
}
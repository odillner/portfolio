import React from 'react'
import styled from 'styled-components'

const CloseIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;
  :before,
  :after {
    content: "";
    position: absolute;
    background: ${({theme}) => theme.materialText};
  }
  :before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  :after {
    height: 3px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const MinimizeIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  :before,
  :after {
    content: "";
    position: absolute;
    background: ${({theme}) => theme.materialText};
  }
  :after {
    height: 3px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const CloseButton = ({click}) => {
    return (
        <button
            style={{float: 'right', margin: '3px'}}
            size='sm'
            onClick={() => click()}
        >
            <CloseIcon/>
        </button>
    )
}

export const MinimizeButton = ({click}) => {
    return (
        <button
            style={{float: 'right', margin: '3px'}}
            size='sm'
            onClick={() => click()}
        >
            <MinimizeIcon/>
        </button>
    )
}
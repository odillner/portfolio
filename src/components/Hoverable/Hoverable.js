import React from 'react'
import styled from 'styled-components'


const Alt = styled.div`
    width: 100%;
    height: 100%;
    display:none;
    vertical-align: middle;
    $p {
        text-align: center;
    }
`

const Default = styled.div`
    width: 100%;
    height: 100%;
    display:table-cell;
    vertical-align: middle;
`

const Wrapper = styled.div`
    width: 60px;
    height: 60px;
    &:hover ${Alt} {
        display:table-cell;
    }
    &:hover ${Default} {
        display:none;
    }
`


const Hoverable = ({alt, children}) => (
    <Wrapper>
        <Default>{children}</Default>
        {(alt) ? <Alt>{alt}</Alt> : null}
    </Wrapper>
)

export default Hoverable
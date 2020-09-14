import React from 'react'
import {useSelector} from 'react-redux'

import windowTypes from './types/'

function WindowRenderer() {
    const windows = useSelector(state => state.windows)

    return (
        <div style={{position: 'relative'}}>
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
        </div>
    )
}

export default WindowRenderer

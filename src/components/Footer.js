import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {closeWindow, maximizeWindow} from '../reducers/windows'

const Footer = () => {
    const windows = useSelector(state => state.windows.items)
    const dispatch = useDispatch()

    const maximize = (item) => {
        dispatch(maximizeWindow(item))
    }

    return(
        <footer style={{position: 'fixed', bottom: '0', left: '0', width: '100%', zIndex: 1000, display: 'inline-block'}}>
            <div
                style={{padding: '1rem', lineHeight: '1.5', width: '100%',}}
            >
                {windows.map(window => {
                    if (window.minimized) {
                        return (
                            <button
                                key={window.id}
                                onClick={() => maximize(window)}
                                variant='menu'
                            >
                                {window.type}
                            </button>
                        )
                    }
                })}
            </div>
        </footer>
    )
}

export default Footer

import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {Switch, Route} from "react-router-dom"

import {addWindow} from "./reducers/windows"

const routes = [
    "About",
    "Contact",
    "Home",
    "Skills",
    ""
]

const Routing = () => {
    const dispatch = useDispatch()

    const generateRouteComponent = (route) => {
        const path = `/${route}`

        const Component = () => {
            useEffect(() => {
                if (route) {
                    dispatch(addWindow(route))
                    document.title = `Ossian Dillner | ${route}`
                } else {
                    document.title = "Ossian Dillner | Web Developer"
                }
            }, [])

            return null
        }

        return (
            <Route key={route} path={path}>
                <Component/>
            </Route>
        )
    }

    return (
        <Switch>
            {routes.map(route => generateRouteComponent(route))}
        </Switch>
    )
}

export default Routing

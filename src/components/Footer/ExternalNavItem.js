import React from "react"

import IconGenerator from "../../icons"

const ExternalNavItem = ({type, link}) => {
    return (
        <div>
            <a href={link}>
                <IconGenerator type={type} dimensions={40} hover={"var(--alt-accent-color)"}/>
            </a>
        </div>
    )
}

export default ExternalNavItem
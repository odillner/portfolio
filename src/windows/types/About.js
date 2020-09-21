import React from "react"

import StandardWindow from "../WindowWrapper"

const About = ({id}) => {
    return (
        <StandardWindow title='About' id={id}>
            <p>Hello and welcome to my portfolio!</p>
        </StandardWindow>
    )
}


export default About
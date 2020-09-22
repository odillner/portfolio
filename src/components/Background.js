import React, {useEffect, useState} from "react"
import styled from "styled-components"

const BackgroundWrapper = styled.svg`
    display: block;
    position: absolute;
    bottom: 60px;
    min-width: 1000px;
`

const PolygonWrapper = styled.svg`
    display: block;
    position: absolute;
    bottom: 60px;
    z-index: 5;
    min-width: 1000px;
`

const Polygon = styled.polygon`
    opacity: 1;
    transition: fill 1.5s ease-out;
    fill: ${props => props.active ? "var(--main-accent-color)" : "var(--alt-accent-color)"};
`

const Background = () => {
    const [polygons, setPolygons] = useState([true, true, true])
    const [count, setCount] = useState(0)

    const animatePolygons = () => {
        const newPolygons = Array(3)
        for (let i=0;i<3;i++) {
            newPolygons[i] = (i===count) ? !polygons[i] : polygons[i]
        }

        setPolygons(newPolygons)
        setCount((count === 2) ? 0 : count + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            animatePolygons()
        }, 1300)

        return () => clearInterval(interval)
    },[count])

    return (
        <div>
            <BackgroundWrapper id="" preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" data-height="200">
                <polygon style={{fill: "var(--alt-bg-color)"}} points="1488,134 1304,100 1068,152 909.935,92.044 672,198 364,142 242,32 -4,95 -4,204 1604,204 1604,0 "/>
            </BackgroundWrapper>
            <PolygonWrapper id="" preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" data-height="200">
                <Polygon active={polygons[0]} points={"672,198 364,142 242,32 -4,95 -4,82.333 242,32 374,136"}/>
                <Polygon active={polygons[1]} points={"894,86 672,198 909.935,92.044"}/>
                <Polygon active={polygons[2]} points={"1068,152 1302,86 1486,126 1604,0 1488,134 1304,100"}/>
            </PolygonWrapper>
        </div>
    )
}

export default Background
import React, {useEffect, useState} from "react"
import styled from "styled-components"
import BannerBackground from "./BannerBackground"


/* TODO: PLEASE DO NOT LOOK AT ANY OF THIS CODE */

const StyledPath = styled.path`
    stroke-width: 1px;
    fill: ${props => props.active ? "var(--main-accent-color)" : "var(--alt-accent-color)"};
    transition: fill 1s ease-out;
`


const Path = (active, d) => {
    return (
        <StyledPath
            d={d}
            active={active}
        />
    )
}

const Banner = () => {
    const [paths, setPaths] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true])
    const [count, setCount] = useState(0)

    const animatePaths = () => {
        const newPaths = Array(paths.length)
        for (let i=0;i<paths.length;i++) {
            newPaths[i] = (i===count) ? !paths[i] : paths[i]
        }

        setPaths(newPaths)
        setCount((count === paths.length) ? 0 : count + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            animatePaths()
        }, 20)

        return () => clearInterval(interval)
    },[count])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000px"
            height="1000px"
            viewBox="0 0 210 297"
            id="svg369"
        >
            <g>
                <BannerBackground/>
                <StyledPath
                    d="M 191.01906,108.84031 V 72.686779 l 18.07588,18.076939 -18.07588,18.076592"
                    active={paths[0]}
                />
                <StyledPath
                    d="M 172.93965,90.763718 V 54.610191 l 18.07941,18.076588 -18.07941,18.076939"
                    active={paths[1]}
                />
                <StyledPath
                    d="M 191.01906,108.84031 V 72.686779 l -18.07941,18.076939 18.07941,18.076592"
                    active={!paths[2]}
                />
                <StyledPath
                    d="m 191.01871,108.83996 h 0.17639 V 72.260641 l -18.50274,18.502376 18.50274,18.502733 v -0.42579 h -0.17639 l 0.12347,-0.12488 -17.95241,-17.951711 17.65256,-17.651148 v 35.727739 h 0.17638 l 0.12347,-0.12488 -0.12347,0.12488 M 82.557772,72.68643 v 36.15353 L 64.481185,90.763369 82.557772,72.68643"
                    active={!paths[3]}
                />
                <StyledPath
                    d="M 82.558124,72.686779 H 82.38174 V 108.41452 L 64.730949,90.763718 82.682656,72.811659 82.558124,72.686779 H 82.38174 82.558124 L 82.433244,72.562255 64.231781,90.763366 82.734509,109.2661 V 72.26099 l -0.301265,0.301265 0.12488,0.124524"
                    active={!paths[4]}
                />
                <StyledPath
                    d="M 82.558124,72.686779 V 36.533604 L 100.63472,54.610191 82.558124,72.686779"
                    active={paths[5]}
                />
                <StyledPath
                    d="M 82.558124,72.686779 V 36.533604 L 64.481537,54.610191 82.558124,72.686779"
                    fill="#3955ae"
                />
                <StyledPath
                    d="M 154.86377,108.84031 V 72.686779 l 18.07588,18.076939 -18.07588,18.076592 M 136.78789,126.9169 V 90.763718 l 18.07588,18.076592 -18.07588,18.07659"
                    active={paths[6]}
                />
                <StyledPath
                    d="M 28.32801,90.763718 V 54.610191 L 46.404598,72.686779 28.32801,90.763718"
                    active={!paths[7]}
                />
                <StyledPath
                    d="m 28.32801,90.763718 h 0.176385 V 55.035988 L 46.155194,72.686779 28.203487,90.638837 28.32801,90.763718 H 28.504395 28.32801 L 28.452894,90.888249 46.65401,72.686779 28.151626,54.1844 V 91.189157 L 28.452894,90.888249 28.32801,90.763718 M 154.86377,108.84031 V 72.686779 l -18.07588,18.076939 18.07588,18.076592"
                    active={!paths[8]}
                />
                <StyledPath
                    d="m 154.86377,108.84031 h 0.17639 V 72.26099 l -18.50168,18.502376 18.50168,18.502734 v -0.42579 h -0.17639 l 0.127,-0.12488 -17.95241,-17.951712 17.64903,-17.651148 v 35.72774 h 0.17638 l 0.127,-0.12488 -0.127,0.12488"
                    active={!paths[9]}
                />
                <StyledPath
                    d="M 154.86377,72.686779 V 36.533604 l 18.07588,18.076587 -18.07588,18.076588"
                    active={paths[10]}
                />
                <StyledPath
                    d="M 154.86377,72.686779 V 36.533604 l -18.07588,18.076587 18.07588,18.076588"
                    active={!paths[11]}
                />
                <StyledPath
                    d="m 154.86377,72.686779 h 0.17639 V 36.107813 l -18.50168,18.502378 18.50168,18.502736 v -0.426148 h -0.17639 l 0.127,-0.124524 L 137.03836,54.610191 154.68739,36.9594 v 35.727379 h 0.17638 l 0.127,-0.124524 -0.127,0.124524"
                    active={!paths[12]}
                />
                <StyledPath
                    d="M 136.78789,90.763718 V 54.610191 l -18.07659,18.076588 18.07659,18.076939"
                    active={!paths[13]}
                />
                <StyledPath
                    d="m 136.78789,90.763718 h 0.17638 V 54.1844 l -18.50237,18.502379 18.50237,18.502735 v -0.425796 h -0.17638 l 0.12347,-0.124881 -17.95065,-17.952058 17.6508,-17.650791 v 35.72773 h 0.17638 l 0.12347,-0.124881 -0.12347,0.124881"
                    active={!paths[14]}
                />
                <StyledPath
                    d="M 136.78789,54.610191 V 18.457018 l -18.07659,18.076586 18.07659,18.076587"
                    active={!paths[15]}
                />
                <StyledPath
                    d="m 136.78789,54.610191 h 0.17638 V 18.031226 l -18.50237,18.502378 18.50237,18.502384 v -0.425797 h -0.17638 l 0.12347,-0.124523 -17.95065,-17.952064 17.6508,-17.650794 v 35.727381 h 0.17638 l 0.12347,-0.124523 -0.12347,0.124523"
                    active={!paths[16]}
                />
                <StyledPath
                    d="M 118.7113,108.84031 V 72.686779 L 136.78789,90.763718 118.7113,108.84031 M 136.78789,90.763718 V 54.610191 l 18.07588,18.076588 -18.07588,18.076939 m -36.15317,0 V 54.610191 l 18.07658,18.076588 -18.07658,18.076939"
                    active={paths[17]}
                />
                <StyledPath
                    d="M 118.7113,108.84031 V 72.686779 l -18.07658,18.076939 18.07658,18.076592"
                    active={!paths[18]}
                />
                <StyledPath
                    d="m 118.7113,108.84031 h 0.17639 V 72.26099 l -18.50238,18.502376 18.50238,18.502734 v -0.42579 h -0.17639 l 0.12488,-0.12488 -17.95206,-17.951712 17.6508,-17.651148 v 35.72774 h 0.17638 l 0.12488,-0.12488 -0.12488,0.12488"
                    active={!paths[19]}
                />
                <StyledPath
                    d="M 10.251427,36.533604 V 0.3800779 L 28.32801,18.457018 10.251427,36.533604"
                    active={!paths[20]}
                />
                <StyledPath
                    d="m 10.251427,36.533604 h 0.176385 V 0.8062229 l 17.650794,17.6507951 -17.952059,17.95171 0.12488,0.124876 h 0.176385 -0.176385 L 10.375955,36.658135 28.577423,18.457018 10.075043,-0.0457141 V 36.9594 l 0.300912,-0.301265 -0.124528,-0.124531"
                    active={!paths[21]}
                />
                <StyledPath
                    d="m -188.76847,-89.577056 v -36.153524 l -18.07659,18.07694 18.07659,18.076584 m 108.459873,36.153175 v -36.153175 l 18.07659,18.076587 -18.07659,18.076588 M 10.075043,36.9594 V 0.80624 l -18.07588,18.07659 18.07588,18.07657"
                    active={paths[22]}
                />
                <StyledPath
                    d="m 28.507222,54.610194 v -36.15316 l -18.07941,18.07657 18.07941,18.07659 m -18.07941,18.07658 v -36.15317 l -18.07588,18.07659 18.07588,18.07658 M -134.18383,-108.07944 v 36.153175 l -18.07658,-18.076587 18.07658,-18.076588 m 36.153529,36.153175 v -36.153175 l 18.076587,18.076588 -18.076587,18.076587"
                    active={paths[23]}
                />
                <StyledPath
                    d="M 46.404598,0.3800779 V 36.533604 L 28.32801,18.457018 46.404598,0.3800779"
                    active={!paths[24]}
                />
                <StyledPath
                    d="M 46.404598,0.3800779 H 46.228213 V 36.107813 L 28.577423,18.457018 46.529481,0.5049579 46.404598,0.3800779 h -0.176385 0.176385 L 46.280074,0.2555499 28.078606,18.457018 46.580982,36.9594 V -0.0457141 l -0.300908,0.301264 0.124524,0.124528"
                    active={!paths[25]}
                />
                <StyledPath
                    d="M 64.481537,54.610191 V 18.457018 L 46.404598,36.533604 64.481537,54.610191"
                    active={!paths[26]}
                />
                <StyledPath
                    d="m 64.481537,54.610191 h 0.176035 V 18.031226 L 46.155194,36.533604 64.657572,55.035988 V 54.610191 H 64.481537 L 64.606068,54.485668 46.65401,36.533604 64.304803,18.88281 l 2.65e-4,35.727381 h 0.176384 l 0.124529,-0.124523 -0.124529,0.124523"
                    active={!paths[27]}
                />
                <StyledPath
                    d="M 82.558124,72.686779 V 36.533604 L 64.481537,54.610191 82.558124,72.686779"
                    active={!paths[28]}
                />
                <StyledPath
                    d="m 82.558124,72.686779 h 0.176385 V 36.107813 L 64.231781,54.610191 82.734509,73.112927 V 72.686779 H 82.558124 L 82.682656,72.562255 64.730949,54.610191 82.38174,36.9594 v 35.727379 h 0.176384 l 0.124532,-0.124524 -0.124532,0.124524"
                    active={!paths[29]}
                />
                <StyledPath
                    d="M 100.63472,54.610191 V 18.457018 l 18.07658,18.076586 -18.07658,18.076587"
                    active={paths[30]}
                />
                <StyledPath
                    d="M 100.63472,54.610191 V 18.457018 L 82.558124,36.533604 100.63472,54.610191"
                    active={!paths[31]}
                />
                <StyledPath
                    d="m 100.63472,54.610191 h 0.17638 V 18.031226 L 82.30872,36.533604 100.8111,55.035988 v -0.425797 h -0.17638 L 100.75924,54.485668 82.807536,36.533604 100.45833,18.88281 v 35.727381 h 0.17639 l 0.12452,-0.124523 -0.12452,0.124523"
                    active={!paths[32]}
                />
                <StyledPath
                    d="M 46.404598,72.686779 V 36.533604 L 64.481537,54.610191 46.404598,72.686779"
                    active={paths[33]}
                />
                <StyledPath
                    d="M 64.481537,54.610191 V 90.763718 L 82.558124,72.686779 64.481537,54.610191 M 191.01906,72.686779 V 36.533604 l 18.07588,18.076587 -18.07588,18.076588"
                    active={paths[34]}
                />
                <StyledPath
                    d="M 191.01906,72.686779 V 36.533604 l -18.07941,18.076587 18.07941,18.076588"
                    active={!paths[35]}
                />
                <StyledPath
                    d="m 191.01906,72.686779 h 0.17639 V 36.107813 l -18.50274,18.502378 18.50274,18.502736 v -0.426148 h -0.17639 L 191.14253,72.562255 173.19012,54.610191 190.84268,36.9594 v 35.727379 h 0.17638 l 0.12347,-0.124524 -0.12347,0.124524"
                    active={!paths[36]}
                />
                <StyledPath
                    d="M 209.09494,90.763718 V 54.610191 l -18.07588,18.076588 18.07588,18.076939"
                    active={!paths[37]}
                />
                <StyledPath
                    d="m 209.09494,90.763718 h 0.17639 V 54.1844 l -18.50274,18.502379 18.50274,18.502735 v -0.425796 h -0.17639 L 209.21841,90.638837 191.266,72.686779 208.91856,55.035988 v 35.72773 h 0.17638 l 0.12347,-0.124881 -0.12347,0.124881"
                    active={!paths[38]}
                />
                <StyledPath
                    d="M 118.7113,36.533604 V 0.3800779 L 136.78789,18.457018 118.7113,36.533604 m -72.306702,0 V 0.3800779 L 64.481537,18.457018 46.404598,36.533604"
                    active={paths[39]}
                />
                <StyledPath
                    d="M 118.7113,36.533604 V 0.3800779 L 100.63472,18.457018 118.7113,36.533604"
                    active={!paths[40]}
                />
                <StyledPath
                    d="m 118.7113,36.533604 h 0.17639 V -0.0457141 L 100.38531,18.457018 118.88769,36.9594 v -0.425796 h -0.17639 l 0.12488,-0.124876 -17.95206,-17.95171 17.6508,-17.6507951 V 36.533604 h 0.17638 l 0.12488,-0.124876 -0.12488,0.124876"
                    active={!paths[41]}
                />
                <StyledPath
                    d="M 172.69271,54.610191 V 18.457018 l 18.07941,18.076586 -18.07941,18.076587 M 190.77212,36.533604 V 0.3800779 L 208.848,18.457018 190.77212,36.533604 m -108.460936,0 V 0.3800779 L 100.38778,18.457018 82.311184,36.533604 m 72.305646,0 V 0.3800779 l 18.07588,18.0769401 -18.07588,18.076586"
                    active={paths[42]}
                />
                <StyledPath
                    d="M 191.01906,36.533604 V 0.3800779 l -18.07941,18.0769401 18.07941,18.076586"
                    active={!paths[43]}
                />
                <StyledPath
                    d="m 191.01906,36.533604 h 0.17639 V -0.0457141 L 172.69271,18.457018 191.19545,36.9594 v -0.425796 h -0.17639 l 0.12347,-0.124876 -17.95241,-17.95171 17.65256,-17.6507951 V 36.533604 h 0.17638 l 0.12347,-0.124876 -0.12347,0.124876 m -36.15529,0 V 0.3800779 l -18.07588,18.0769401 18.07588,18.076586"
                    active={!paths[44]}
                />
                <StyledPath
                    d="m 154.86377,36.533604 h 0.17639 V -0.0457141 L 136.53848,18.457018 155.04016,36.9594 v -0.425796 h -0.17639 l 0.127,-0.124876 -17.95241,-17.95171 17.64903,-17.6507951 V 36.533604 h 0.17638 l 0.127,-0.124876 -0.127,0.124876"
                    active={!paths[45]}
                />
                <StyledPath
                    d="m 172.94212,90.763369 h 0.17639 v -36.57932 l -18.50274,18.50237 18.50274,18.50274 v -0.42579 h -0.17639 l 0.12347,-0.12488 -17.95241,-17.95171 17.65256,-17.65115 v 35.72774 h 0.17638 l 0.12347,-0.12488 -0.12347,0.12488 M 64.481185,54.609839 v 36.15353 L 46.404598,72.686779 64.481185,54.609839"
                    active={!paths[46]}
                />
                <StyledPath
                    d="M 10.427812,72.687134 V 36.533604 L 28.5044,54.610194 10.427812,72.687134"
                    active={!paths[47]}
                />
            </g>
        </svg>

    )
}



export default Banner
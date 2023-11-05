import { motion } from "framer-motion"
import styled from "styled-components"

const Icons = styled.div`
display: flex;
align-items:center;
flex-direction:column;
position:fixed;
bottom:0;
left:4rem;
z-index:3;
gap:0.5rem;
`

const Line = styled.span`
background-color:white;
width:2px;
height:12rem;
`

const IconDiv=styled(motion.div)`

`

export {
    Icons,
    Line,
    IconDiv
}
import styled from "styled-components";
import { smallScreen } from "../../styles/responsive";

const ScrollDiv = styled.div`
height:5rem;
width:5rem;


${smallScreen({
    height:"2rem",
    width:"2rem",
})}

`

const ScrollIconDiv = styled.img`
width:100%;
height:100%;
`

export {
    ScrollDiv, ScrollIconDiv
}
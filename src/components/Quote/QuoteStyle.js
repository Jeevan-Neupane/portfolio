import styled from "styled-components";
import { labtop, mobile, smallScreen } from "../../styles/responsive";
import { WrapperContainer } from "../../styles/Container";
export const QuoteWrapper = styled(WrapperContainer)`



`
export const QuoteDiv = styled.div`
margin:0rem auto;

text-align:center;

width:80%;

${smallScreen({
    display:"none"
})}


${labtop({
    height: "10rem",
     marginTop: "5rem"
})}


`

export const QuoteText = styled.h3`
color:white;
font-size:1.6rem;


text-align:left;
${labtop({
    fontSize: "1.5rem"
})}
`

export const QuoteBy = styled.p`
font-size:1.2rem;
color:white;
text-align:right;


margin-top:1rem;
${labtop({
    fontSize: "1.5rem"
})}
${mobile({
    fontSize: "1rem",
})}
`


import styled, { keyframes } from "styled-components";
import { MainDiv } from "../../styles/Container";
import { computer, labtop, mobile, smallScreen } from "../../styles/responsive";
import { motion } from "framer-motion";

const IntroductionDiv = styled.div`
text-align:center;
margin-top:3rem;
margin-bottom:3rem;

${labtop({
    marginTop: "0"
})}


`

const Main = styled(MainDiv)`
background-color:black;


padding-top:60px;

`

const Box = styled.div`
display:flex;

gap:3rem;

align-items:center;
justify-content:center;


${labtop({
    flexDirection: "column",
    alignItems: "center",
    gap: "0"
})}



`

const SubBox = styled(motion.div)`
flex:1;
border:2px solid ${props => props.theme.body};

display: flex;
align-items:center;

${labtop({
    width: "60%"
})}

${mobile({
    width: "80%"
})}
`


const ImageDiv = styled(motion.div)`
width:45rem;
${smallScreen({
    width:"40rem"
})}

height:100%;
${labtop({
    display: "none"
})}


`


const Title = styled.h2`
color:${props => props.theme.beautyColor};
font-size:4rem;
margin-bottom:1rem;
span{
    color:${props => props.theme.valuableColor};
    
}

${labtop({
    marginBottom: "0"
})}

${smallScreen({
    fontSize: "3rem"
})}

`
const TitleText = styled.p`
font-size:2rem;
color:${props => props.theme.body};
margin-bottom:1rem;
font-family:${props => props.theme.specialFontFamily};
${smallScreen({
    fontSize: "1.6rem"
})}

`

const DetailBox = styled(motion.div)`
padding:2rem;

p{
font-size:1.8rem;
margin-top:2rem;
color:${props => props.theme.body};
text-align:justify;
${labtop({
    fontSize: "1.9rem"
})}

${smallScreen({
    fontSize: "1.6rem",
    marginTop: "1rem",

})}
${mobile({
    fontSize:"2rem"
})}
}
${smallScreen({
    padding: "1rem"
})}




`

export {
    Main,
    Box,
    SubBox,
    ImageDiv,

    Title,
    TitleText,
    DetailBox,
    IntroductionDiv
}
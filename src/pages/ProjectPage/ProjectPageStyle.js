import styled from "styled-components";
import { MainDiv, WrapperContainer } from "../../styles/Container";
import { labtop, smallScreen } from "../../styles/responsive";
import { motion } from "framer-motion";


const Main = styled(MainDiv)`
background-color:${props => props.theme.backGroundContact};
height:400vh;
display: flex;
overflow:hidden;
padding-top:60px;
position:relative;

`
const Wrapper = styled.div`
display: flex;
position:fixed;
top:25rem;
left:20rem;
z-index:1;
${labtop({
    bottom: "0",
    alignItems: "center",
    justifyContent: "center"
})}
`

const TextBox = styled.div`
position:fixed;
top:7rem;
text-align:center;
left:0;
right:0;

`
const Title = styled.h2`
color:${props => props.theme.beautyColor};
font-size:4rem;
margin-bottom:1rem;
span{
    color:${props => props.theme.valuableColor};
    
}`


const TitleText = styled.p`
font-size:2rem;
color:${props => props.theme.body};
margin-bottom:1rem;
font-family:${props => props.theme.specialFontFamily};

`

const ScollSymbol = styled(motion.div)`
position:fixed;
bottom: 2rem;
left:50%;
transform:translateX(-50%);
z-index:999;

`


export {
 
    Main,
    Wrapper, Title, TitleText, TextBox, ScollSymbol
}
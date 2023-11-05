import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { labtop, smallScreen } from "../../styles/responsive";
import { motion } from "framer-motion";


export const Box = styled(motion.div)`

width:40rem;
height:40rem;
background-color:${props => props.theme.text};
color:${props => props.theme.body};
padding:1.5rem 2rem;
margin-right:8rem;
border-radius:0 50px 0 50px;
display: flex;
flex-direction:column;
justify-content:space-between;
border:1px solid ${props => props.theme.body};
transition:all .2s ease;

${labtop({
    padding: "3rem",
    height: "50rem",
    width: "50rem"
})}


`

export const Title = styled.h2`
font-size:3rem;
color:${props => props.theme.beautyColor};
${smallScreen({
    fontSize:"2rem"
   })}
    `

export const Description = styled.p`
font-size:2rem;
font-family:"Karla",sans-serif;
font-weight:500;
${smallScreen({
    fontSize:"1.6rem"
   })}
`

export const TechnologyUsed = styled.div`
 padding-top:.5rem;
 display: flex;
 flex-wrap:wrap;
 flex-direction:column;

 h4{
    font-size:2rem;
    font-weight:500;
 }
`

export const Technology = styled.p`
margin-left:1rem;
 font-size:1.2rem;
 margin-top:1rem;
 color:${props => props.theme.valuableColor};
 

`

export const VisitButton = styled.a`
background-color:${props => props.theme.beautyColor};
 color:${props => props.theme.body};
 text-decoration:none;
width:50%;
 border-radius:0 0 0 50px;
font-size:2rem;
text-align:center;
 padding:1rem 0;
transition:all .3s ease-in-out;
 &:hover{
    scale: 1.1;

 }
 `

export const GitHubButton = styled.a`

background-color:${props => props.theme.valuableColor};
color:${props => props.theme.text};
padding:1rem 0;
 text-decoration:none;
 font-size:2rem;
 flex:1;
text-align:center;
transition:all .3s ease-in-out;
 &:hover{
    scale: 1.1;

 }
 
`

export const Footer = styled.div`
display: flex;
 justify-content:space-between;
 align-items:center;
 gap:10px;
`



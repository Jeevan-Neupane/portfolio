import styled from "styled-components";
import { MainDiv } from "../../styles/Container";
import { labtop, smallScreen } from "../../styles/responsive";


const Main = styled(MainDiv)`
background-image:${props => props.theme.backgroundSkill};
display: flex;
align-items:center;
justify-content:center;
padding-top:60px;
${labtop({
    paddingTop:"0"
})}
`
const Box = styled.div`


`

const Title = styled.div`
color:${props => props.theme.beautyColor};
font-size:4rem;
margin-bottom:1rem;
span{
    color:${props => props.theme.valuableColor};
    
}
text-align:center;

${smallScreen({
    fontSize:"3rem"
})}
`
const SutTitle = styled.p`
font-size:2rem;
color:${props => props.theme.body};
margin-bottom:1rem;
font-family:${props => props.theme.specialFontFamily};
text-align:center;
margin-bottom:3rem;
${smallScreen({
    fontSize:"1.6rem"
})}

`
const SkillsDiv = styled.div`
display: flex;
flex-direction:column;
gap:2rem;
padding:0 2rem;
width:80%;
margin:0 auto;

${labtop({
    width: "100%",
})}
`
const SkillWrapper = styled.div`
display: flex;
flex-direction:column;

`

const SkillHeading = styled.h2`
font-size:2rem;
color:${props => props.theme.body};
margin-bottom:1rem;
color:${props => props.theme.valuableColor};
`

const SkillContainer = styled.div`
display: flex;
gap:2rem;

`


export {
    Main, Box, Title, SutTitle, SkillsDiv, SkillHeading, SkillContainer, SkillWrapper
}
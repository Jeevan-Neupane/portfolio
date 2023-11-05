import styled from "styled-components";
import { MainDiv } from "../../styles/Container";
import { labtop } from "../../styles/responsive";


const Main = styled(MainDiv)`
background-color:${props => props.theme.backGroundContact};
display: flex;
align-items:center;
justify-content:center;
color:${props => props.theme.body};
padding-left:5rem;
`
const ContactDiv = styled.div`
display: flex;
justify-content:center;
gap:3rem;
${labtop({


    flexDirection: "column",
    alignItems: "center",
    gap:"5rem"
})}

`

const LeftDiv = styled.div`
width:50%;
${labtop({

    width: "80%"
})}

`
const Title = styled.div`
color:${props => props.theme.beautyColor};
font-size:4rem;
margin-bottom:1rem;
span{
    color:${props => props.theme.valuableColor};
    
}
width:100%;

`
const Description = styled.p`
font-size:2rem;
color:${props => props.theme.body};
margin-bottom:1rem;
font-family:${props => props.theme.specialFontFamily};
`
const InfoDiv = styled.div`
margin-left:2rem;
`
const IconInfoDiv = styled.div`
font-size:2rem;
margin-top:1rem;
`
const Icon = styled.span`
color:${props => props.theme.valuableColor};
margin-right:1rem;
`
const Info = styled.span`
color:${props => props.theme.body};
`

const RightDiv = styled.div`
width:50%;
${labtop({

    width: "80%"
})}
`
export {
    Main, LeftDiv, Title, ContactDiv, Description, Icon, Info, InfoDiv, RightDiv, IconInfoDiv
}
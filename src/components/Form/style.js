import styled from "styled-components";
import { labtop } from "../../styles/responsive";

export const FormDiv = styled.form`
width:100%;
`

export const Label = styled.label`
display:block;
font-size:2rem;
color:${props => props.theme.valuableColor};
margin-bottom:.5rem;


`

export const FormButton = styled.button`
display:block;
width:80%;
margin-top:2rem;
padding:1rem;
&:focus{
    border:solid 2px ${props => props.theme.valuableColor}
}
outline:none;
border:none;
background-color:${props => props.theme.beautyColor};
cursor: pointer;
border:2px solid ${props => props.theme.beautyColor};
color:white;
font-size:1.6rem;
${labtop({
    width: "100%",
})}
`

export const Input = styled.input`
width:80%;
margin-bottom:2rem;
padding:.5rem 1rem;
font-size:1.6rem;
border:2px solid white;
outline:none;
&:focus{
    border:solid 2px ${props => props.theme.beautyColor}
}

${labtop({
    width: "100%",
})}
`
export const TextArea = styled.textarea`
width:80%;
outline:none;
height:10rem;
border:2px solid white;
resize:none;
padding:.5rem 1rem;
font-size:1.6rem;
&:focus{
    border:solid 2px ${props => props.theme.beautyColor}
}

${labtop({
    width: "100%",
})}

`

export const MessageBox = styled.div`
margin-top:2rem;
`
export const Message = styled.p`
font-size:1.6rem;

color:${props => props.color};

`
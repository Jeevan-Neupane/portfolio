import styled from "styled-components";
import { labtop } from "../../styles/responsive";
import { Link } from "react-router-dom";


const MessageBox = styled(Link)`
position:fixed;
bottom:2rem;
right:4rem;
font-size:3rem;
color:${props => props.theme.body};
border:1px  solid ${props => props.theme.body};
padding:1rem;
cursor: pointer;
display: flex;
align-items:center;
justify-content:center;
z-index: 1000;
display:none;

${labtop({
    display:"flex"
})}

`

export {
    MessageBox
}
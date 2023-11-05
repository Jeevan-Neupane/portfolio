import styled from "styled-components";
import { Link } from "../Navbar/NavbarStyle";

const LogoDiv = styled.div`
color:${props => props.theme.beautyColor};
font-size:3rem;
font-family:${props => props.theme.specialFontFamily};
font-weight:800;

`
const LogoLink = styled(Link)`
color:${props => props.theme.beautyColor};
`

export {
    LogoDiv,
    LogoLink
}
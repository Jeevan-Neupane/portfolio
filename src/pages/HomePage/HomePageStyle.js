import styled from "styled-components";
import { MainDiv, WrapperContainer } from "../../styles/Container";


const Main = styled(MainDiv)`
background-image:${props => props.theme.backgroundHome};

padding-top:60px;





`

const MainContainer = styled(WrapperContainer)`
margin-top:2rem;
padding-bottom:0;

`

export {
    Main,
    MainContainer
}
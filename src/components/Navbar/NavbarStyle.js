import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
import { labtop, smallMobile } from "../../styles/responsive";
import { motion } from "framer-motion";


const NavWrapper = styled(WrapperContainer)`
display: flex;
justify-content:space-between;
align-items:center;
padding-top:1rem;
position:fixed;
top:0;
left:0;
right:0;
height:60px;
z-index:999;

`

const Nav = styled.nav`


.bigNav{
display:flex;
${labtop({
    display: "none",
})}
}

.smallNav{
    display :none;

    ${labtop({
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: "456"

})
    }
}

`


const NavItems = styled(motion.ul)`
display: flex;
list-style-type:none;
gap:10rem;
${labtop({
    position: "absolute",
    flexDirection: "column",
    width: "300px",
    right: "0",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    top: 0,
    height: "100vh",
    backgroundColor: "black",

})}



`

const NavItem = styled.li`
font-size:1.6rem;


`

const Link = styled(NavLink)`
color:${props => props.theme.body};
text-decoration:none;
padding-bottom:.5rem;

`

const ContactDiv = styled.button`
outline:none;
border:none;
padding:.5rem 2rem;
background-color:${props => props.theme.body};
border-radius:.5rem;


`

const ContactLink = styled(Link)`

color:${props => props.theme.text};



`

export const MenuIcons = styled.div`
font-size:3rem;
cursor: pointer;
color:${props => props.theme.body};
display:none;
padding:2rem;

${labtop({
    display: "flex",
    position: "absolute",
    right: "25px",
    top: "15px",
    zIndex: "999",
    alignItems:"center",
    justifyContent:"center"
})}


`



const MobileNavLink = styled(Link)`
color:${props => props.theme.body};
text-decoration:none;
padding-bottom:.5rem;
cursor: pointer;

`
export {
    Nav,
    NavItem,
    NavItems,
    Link, ContactDiv, ContactLink, NavWrapper, MobileNavLink
}
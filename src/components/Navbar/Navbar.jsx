import { useState } from "react";
import Logo from "../Logo/Logo";
import {
 
  Link,
  MenuIcons,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./NavbarStyle";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
 
  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };

  const navList = [
    {
      title: "Home",
      url: "/",
    },

    {
      title: "About",
      url: "/about",
    },

    {
      title: "Skills",
      url: "/skills",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    
  ];
  return (
    <Nav>
      <NavWrapper className="bigNav">
        <Logo />

        <NavItems  >
          {navList.map((item) => {
            return (
              <NavItem key={item.title}>
                <Link
                  to={item.url}
                  style={linkStyle}
                >
                  {item.title}
                </Link>
              </NavItem>
            );
          })}
        </NavItems>
        <MenuIcons
          onClick={() => {
            setOpen((prev) => {
              return !prev;
            });
          }}
        >
          <AiOutlineMenu />
        </MenuIcons>
      </NavWrapper>
    </Nav>
  );
}

export default Navbar;

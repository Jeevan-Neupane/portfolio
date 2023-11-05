import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import {
  MenuIcons,
  MobileNavLink,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./NavbarStyle";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
function MobileNav() {
  const [open, setOpen] = useState(false);

  const variant = {
    open: {
      clipPath: "circle(1200px at 25px 25px)",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    close: {
      clipPath: "circle(0rem at 100% 0rem)",
      transition: {
        type: "spring",
        stiffness: 1200,
        damping: 40,
      },
    },
  };
  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
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
      <NavWrapper
        animate={open ? "open" : "close"}
        className='smallNav'
      >
        <Logo />

        <NavItems variants={variant}>
          {navList.map((item) => {
            return (
              <NavItem key={item.title}>
                <MobileNavLink
                  to={item.url}
                  style={linkStyle}
                >
                  {item.title}
                </MobileNavLink>
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
          {!open ? <AiOutlineMenu /> : <AiFillCloseCircle />}
        </MenuIcons>
      </NavWrapper>
    </Nav>
  );
}

export default MobileNav;

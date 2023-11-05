import React from "react";
import { Div, MainDiv } from "../styles/Container";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Message from "../components/Message/Message";
import Socialcons from "../components/Social Icons/Socialcons";
import MobileNav from "../components/Navbar/MobileNav";

function Layout() {
  const location=useLocation();
  return (
    <MainDiv>
      <Navbar />
      <MobileNav />
      <Div>
        <Outlet />
      </Div>
     {
      (location.pathname!=='/skills' &&location.pathname!=='/about' ) && <Socialcons/>
     }
      <Message />
    </MainDiv>
  );
}

export default Layout;

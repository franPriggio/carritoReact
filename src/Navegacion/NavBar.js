import React from "react";
import "../Navegacion/NavBar.css";

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements/NavBarElements";
import CartWidget from "../components/Carrito/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Sign In
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
          <NavLink to="/signin" activeStyle>
            <CartWidget />
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;

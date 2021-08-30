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
          <NavLink to={`/category/Alive`} activeStyle>
            Alive
          </NavLink>
          <NavLink to={`/category/Dead`} activeStyle>
            Dead
          </NavLink>
          <NavLink to={`/category/Unknown`} activeStyle>
            Unknown
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
          <NavLink to="/cart" activeStyle>
            <CartWidget />
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;

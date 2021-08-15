import React from "react";
import "../Navegacion/NavBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../Carrito/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        bg="primary"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">Health First</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navFont">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Alimentos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Suplementos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Vitaminas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Proteinas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* Carrito */}
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

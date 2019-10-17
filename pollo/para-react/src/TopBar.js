import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./TopBar.css";
import { withRouter } from "react-router-dom";
function TopBar({ location }) {
  const { pathname } = location;
  return (
    <Navbar bg="firebrick" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Pollos Dany</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" active={pathname == "/"}>
            Home
          </Nav.Link>
          <Nav.Link href="/menu" active={pathname == "/menu"}>
            Menu
          </Nav.Link>
          <Nav.Link href="/contact" active={pathname == "/contact"}>
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default withRouter(TopBar);

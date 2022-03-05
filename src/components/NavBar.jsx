import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo-full.svg";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="/about">HOME</Nav.Link>
              <Nav.Link href="/plantcare">PLANT CARE</Nav.Link>
              <Nav.Link href="/sell">SELL</Nav.Link>
              <Nav.Link href="/">SIGN OUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

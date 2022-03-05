import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" variant="light">
        <Container fluid className="mx-2">
          <Navbar.Brand href="/">
            <img
              src={logoLight}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <input
            type="text"
            className="my-auto p-2 rounded-2"
            placeHolder="Search Item Here"
            style={{
              border: "1px solid #E3E1E3",
              width:"500px"
            }}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="/">Explore</Nav.Link>
              <Nav.Link href="/profile">My Items</Nav.Link>
              <Nav.Link href="/profile">Following</Nav.Link>
              <Button href="/create-item" className="gradient mx-2">
                Create
              </Button>
              <Button
                
                className="gradient mx-2"
                href="/"
              >
                Connect
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

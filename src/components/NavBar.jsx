import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo-full.svg";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" variant="light">
        <Container fluid className="mx-2">
          <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <input
            type="text"
            className="my-auto w-50 p-2 rounded-2"
            placeHolder="Search Item Here"
            style={{
              border: "1px solid #E3E1E3",
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
                variant="outline-primary"
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

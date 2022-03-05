import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.svg";

export default function NavBar(props) {
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        style={{ borderBottom: props.theme.border }}
      >
        <Container fluid className="mx-2">
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <p
            className="my-auto d-none d-md-block"
            style={{
              fontfamily: "Gotham",
              fontstyle: "normal",
              fontweight: "bold",
              fontsize: "16px",
              lineheight: "18px",
            }}
          >
            Graphique NFT
          </p>

          <input
            type="text"
            className="my-auto mx-3 p-2 ps-4 rounded-2"
            placeHolder="Search Item Here"
            style={{
              border: "none",
              width: "500px",
              backgroundColor: props.theme.form,
            }}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="/">Explore</Nav.Link>
              <Nav.Link href="/profile">My Items</Nav.Link>
              <Nav.Link href="/profile">Following</Nav.Link>
              <Button
                variant="outline-light"
                href="/create-item"
                className="gradient mx-2"
              >
                Create
              </Button>
              <Button
                variant="outline-light"
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

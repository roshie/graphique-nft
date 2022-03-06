import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.svg";

export default function NavBar({ theme }) {
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        style={{ borderBottom: ` 1px solid ${theme.theme.border}` }}
      >
        <Container fluid className="mx-2">
          <div className="d-flex w-100 justify-content-between justify-content-md-start">
            <Navbar.Brand onClick={theme.toggleTheme}>
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <p
              className="my-auto d-none d-md-block"
              style={{
                fontFamily: "Gotham",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "18px",
              }}
            >
              Graphique NFT
            </p>
            <input
              type="text"
              className="my-auto mx-2 p-2 ps-4 w-md-100"
              placeHolder="Search Item Here"
              style={{
                border: `1px solid ${theme.theme.formBorder}`,
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                backgroundColor: theme.theme.form,
              }}
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse>
            <Nav className="ms-auto mt-5 mt-md-0">
              <Nav.Link href="/" className="p1-regular">
                Explore
              </Nav.Link>
              <Nav.Link href="/profile">My Items</Nav.Link>
              <Nav.Link href="/profile">Following</Nav.Link>
              <div className="d-flex nav-border-top justify-content-center">
                <Button variant="primary" href="/create-item" className="mx-2">
                  Create
                </Button>
                <Button
                  variant="outline-primary"
                  className="btn text-light gradient ms-1"
                  href="/"
                >
                  Connect
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

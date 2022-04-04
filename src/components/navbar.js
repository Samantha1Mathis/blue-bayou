import React from "react";
import { Tabs, Tab, Navbar, Container, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import icon from "../images/info-images/icon.jpeg";

export function NavbarCustom(props) {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "25px" }} href="/">
          <img
            src={icon}
            width="75"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> {' '}
          Blue Bayou
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="topnav">
            <Nav.Link href="#/togo">To go</Nav.Link>
            <Nav.Link href="#/reservations">Reservations</Nav.Link>
            <Nav.Link href="#/info">Info</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><strong>React Test App</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container>
        {/* Logo & Title */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 text-dark">
          <svg
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" />
          </svg>
          <span className="fw-bold fs-5">Curl Harmony</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-4">
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>

          {/* Buttons */}
          <div className="d-flex gap-2 ms-4">
            <Button
              as={Link}
              to="/booking"
              variant="warning"
              className="text-dark fw-bold rounded-pill px-4"
            >
              Book
            </Button>
          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

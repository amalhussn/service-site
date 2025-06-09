import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
      <Container>
        <p className="mb-1">&copy; {new Date().getFullYear()} Curl Harmony</p>
        <p className="small mb-0">Designed by Amal Hussein and Sara Basil</p>
      </Container>
    </footer>
  );
}

export default Footer;

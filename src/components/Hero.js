import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <div
      className="text-white d-flex justify-content-center"
      style={{
        minHeight: "480px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/hero-bg.jp.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        alignItems: "flex-end", // pushes content toward bottom
      }}
    >
      <Container className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-0">All about that natural life</h1>
      </Container>
    </div>
  );
}

export default Hero;

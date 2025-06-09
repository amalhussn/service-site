import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingCTA() {
  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold mb-3">Ready for your next look?</h2>
      <p className="text-muted fs-5 mb-4">Book your appointment with one of our top stylists today.</p>
      <Button
        as={Link}
        to="/booking"
        variant="warning"
        className="text-dark fw-bold rounded-pill px-4"
      >
        Book Now
      </Button>
    </Container>
  );
}

export default BookingCTA;


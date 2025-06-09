import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">About Curl Harmony</h2>
          <hr className="mx-auto" style={{ width: "60px", borderTop: "3px solid #e68019" }} />
        </div>

        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm p-4 bg-light">
              <p className="fs-5 text-muted mb-0">
                At Curl Harmony, we specialize in natural hair care. Our services are designed to
                nourish and enhance every curl, coil, and wave. We proudly use sulfate-free,
                paraben-free products to protect your texture and promote healthy, vibrant hair.
              </p>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 text-center">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-2 text-uppercase text-muted">Location</h5>
              <p className="text-dark mb-1">123 Main Street</p>
              <p className="text-dark">Ottawa, ON K1T 4E9</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-2 text-uppercase text-muted">Contact</h5>
              <p className="text-dark mb-1">Phone: (613) 555-1234</p>
              <p className="text-dark">Email: info@curlharmony.ca</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-2 text-uppercase text-muted">Hours</h5>
              <p className="text-dark mb-1">Mon–Fri: 10:00 AM – 7:00 PM</p>
              <p className="text-dark mb-1">Sat: 9:00 AM – 5:00 PM</p>
              <p className="text-dark mb-0">Sun: Closed</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;

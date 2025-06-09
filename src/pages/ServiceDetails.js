import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ServiceDetails() {
  return (
    <>
      <Header />
      <Container className="py-5" style={{ maxWidth: "600px" }}>
        <Card className="p-4 shadow-sm">
          <h2 className="fw-bold mb-2">Silk Press</h2>
          <p className="text-muted mb-4">
            A silk press is the process of straightening natural hair without the use of chemicals.
            This technique requires a flat iron and a blow dryer. The goal is to create a sleek,
            straight look while preserving the hair's texture and movement.
          </p>

          <h5 className="fw-bold mb-2">Pricing</h5>
          <Row className="mb-4">
            <Col xs={6}>
              <Card className="border-0 p-3 shadow-sm">
                <h6 className="mb-1">$85</h6>
                <small className="text-muted">Female</small>
              </Card>
            </Col>
            <Col xs={6}>
              <Card className="border-0 p-3 shadow-sm">
                <h6 className="mb-1">$85</h6>
                <small className="text-muted">Male</small>
              </Card>
            </Col>
          </Row>

          <h5 className="fw-bold mb-2">Product Info</h5>
          <Card className="border-0 p-3 shadow-sm mb-4">
            <h6 className="mb-1">Hair products</h6>
            <small className="text-muted">Sulfate free</small>
          </Card>

          <h5 className="fw-bold mb-2">Stylist Availability</h5>
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle"
              style={{
                backgroundImage:
                  "url('https://cdn.usegalileo.ai/sdxl10/8fb87f7b-d1a2-434f-8d1d-16185d4ea4e0.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "56px",
                width: "56px",
              }}
            />
            <div>
              <p className="mb-0 fw-medium">Candice</p>
              <small className="text-muted">Available</small>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default ServiceDetails;

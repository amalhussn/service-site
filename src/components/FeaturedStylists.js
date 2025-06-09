import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const stylists = [
  {
    name: "Chanel",
    location: "Toronto, ON",
    specialty: "Specializes in braids and locs",
    image: "/CHANEL.jpg",
  },
  {
    name: "Megan",
    location: "Ottawa, ON",
    specialty: "Specializes in natural hair and color",
    image: "/megan.webp",
  },
  {
    name: "Nia",
    location: "Ottawa, ON",
    specialty: "Specializes in curly cuts and updos",
    image: "/nia.webp",
  },
];

function FeaturedStylists() {
  return (
    <Container className="py-5">
      <h2 className="fw-bold fs-4 text-dark mb-4">Featured Stylists</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {stylists.map((stylist, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-0">
              <div
                className="rounded"
                style={{
                  backgroundImage: `url(${stylist.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "1 / 1",
                }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold text-dark mb-1">
                  {stylist.name}, {stylist.location}
                </Card.Title>
                <Card.Text className="text-muted small">
                  {stylist.specialty}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedStylists;

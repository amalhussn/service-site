import React from "react";
import { Container, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  { name: "Haircut & Style", duration: "1 hour", price: "$120" },
  { name: "Root Touch-Up", duration: "45 min", price: "$90" },
  { name: "Blowout", duration: "45 min", price: "$70" },
  { name: "Balayage", duration: "45 min", price: "$90" },
  { name: "Partial Highlight", duration: "1 hour", price: "$120" },
  { name: "Full Highlight", duration: "1.5 hours", price: "$150" },
  { name: "Ombre", duration: "60 min", price: "$120" },
  { name: "Deep Conditioning Treatment", duration: "45 min", price: "$70" },
  { name: "Hair Extensions", duration: "2 hours", price: "$190" },
  { name: "Keratin Treatment", duration: "45 min", price: "$120" },
  { name: "Updo", duration: "1 hour", price: "$50" },
  { name: "Bridal Hair", duration: "2 hours", price: "$250" },
];

function Services() {
  return (
    <>
      <Header />
      <Container className="py-5">
        <h2 className="fw-bold text-center mb-4">Our Services</h2>

        {services.map((service, index) => (
          <Card key={index} className="mb-3 px-4 py-3 d-flex flex-row justify-content-between align-items-center shadow-sm border-0">
            <div>
              <h5 className="mb-1 fw-semibold">{service.name}</h5>
              <p className="text-muted small mb-0">{service.duration}</p>
            </div>
            <h6 className="mb-0 text-dark">{service.price}</h6>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Services;

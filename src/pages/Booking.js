import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    service: "",
    stylist: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify(formData));
    navigate("/confirmation");
  };

  // Allowed time slots (based on Mon–Fri 10–7, Sat 9–5, closed Sun)
  const timeSlots = [
    "9:00am",   // Saturday only
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",   // Weekdays only
    "7:00pm",   // Weekdays only
  ];

  const disableSundays = (e) => {
    const selectedDate = new Date(e.target.value);
    const isSunday = selectedDate.getDay() === 0;
    if (isSunday) {
      alert("We're closed on Sundays. Please select another date.");
      e.target.value = "";
    } else {
      handleChange(e);
    }
  };

  return (
    <>
      <Header />
      <Container className="py-5">
        <Card className="p-4 shadow-sm" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="fw-bold mb-3">Book an Appointment</h2>
          <p className="text-muted">
            Pick a date and time that works for you. We'll confirm your booking via email.
          </p>

          <Form onSubmit={handleSubmit}>
            {/* Service Selection */}
            <Form.Group className="mb-3" controlId="service">
              <Form.Label>Choose a Service</Form.Label>
              <Form.Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Silk Press">Silk Press</option>
                <option value="Curly Cut">Curly Cut</option>
                <option value="Braids & Locs">Braids & Locs</option>
              </Form.Select>
            </Form.Group>

            {/* Stylist Selection */}
            <Form.Group className="mb-3" controlId="stylist">
              <Form.Label>Choose a Stylist</Form.Label>
              <Form.Select
                name="stylist"
                value={formData.stylist}
                onChange={handleChange}
                required
              >
                <option value="">Select a stylist</option>
                <option value="Megan">Megan</option>
                <option value="Chanel">Chanel</option>
                <option value="Nia">Nia</option>
              </Form.Select>
            </Form.Group>

            {/* Date & Time */}
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={disableSundays}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="time">
                  <Form.Label>Time</Form.Label>
                  <Form.Select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>{slot}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Contact Info */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit */}
            <Button
              type="submit"
              variant="warning"
              className="text-dark fw-bold w-100 rounded-pill"
            >
              Book your appointment
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Booking;

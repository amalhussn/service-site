import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Confirmation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("bookingData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Header />
      <Container className="py-5">
        <h2 className="fw-bold mb-4">Your appointment is confirmed</h2>

        <Card
          className="text-white mb-4"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://cdn.usegalileo.ai/sdxl10/bdc5871b-4217-4725-838b-52a5078fa103.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="text-center">
            <h1 className="fw-bold display-4">{data?.stylist || "Stylist"}</h1>
            <p className="fs-5">{data?.service || "Service"}</p>
            <Button variant="warning" className="text-dark fw-bold mt-3 rounded-pill">
              {data ? `${data.date}, ${data.time}` : "Date & Time"}
            </Button>
          </div>
        </Card>



        <Card className="p-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle bg-light d-flex align-items-center justify-content-center"
              style={{ width: "48px", height: "48px" }}
            >
              📍
            </div>
            <div>
              <h6 className="mb-0">Curl Harmony</h6>
              <small className="text-muted">123 Main Street, Ottawa ON, K1T4E9</small>
            </div>
          </div>
        </Card>

        <Card className="p-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle bg-light d-flex align-items-center justify-content-center"
              style={{ width: "48px", height: "48px" }}
            >
              💳
            </div>
            <div>
              <h6 className="mb-0">Confirmation #{Math.floor(Math.random() * 10000000000)}</h6>
              <small className="text-muted">
                {data?.service || "Service"}, 1 hr 30 min
              </small>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Confirmation;
